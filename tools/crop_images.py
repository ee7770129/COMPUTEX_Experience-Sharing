# -*- coding: utf-8 -*-
# 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
#
# 功能說明：將 COMPUTEX 現場直式照片裁切成 16:9 橫幅、並提亮對比，輸出到 assets/
# 單一職責：只負責「圖片裁切 + 影像增強」，不處理任何網頁邏輯。
# 建立日期：2026-06-06
# 版本：v1.0

import os
from PIL import Image, ImageEnhance

# 來源與輸出路徑（相對於專案根目錄執行）
SRC_DIR = os.path.join("..", "..", "圖檔")
OUT_DIR = os.path.join("..", "assets")

# 每張照片的「垂直聚焦中心」(佔原圖高度的比例) —— 對準舞台螢幕內容
# 這些值是依現場照片中螢幕位置目測設定，可隨輸出結果微調
FOCUS = {
    "IMG_0601.jpg": 0.46,  # AI baseline / 97% 32%
    "IMG_0602.jpg": 0.50,  # 數位主權 Macron
    "IMG_0603.jpg": 0.52,  # everything fails
    "IMG_0604.jpg": 0.44,  # 75% 供應鏈
    "IMG_0605.jpg": 0.40,  # Own Your IT Stack 01/02/03
    "IMG_0606.jpg": 0.54,  # 90% Data Intelligence
    "IMG_0607.jpg": 0.52,  # Secure AI Agents 架構
    "IMG_0608.jpg": 0.56,  # ActiveProtect 架構
    "IMG_0609.jpg": 0.50,  # 3-2-1-1-0
}

# 影像增強參數（現場照片偏暗，統一提亮）
BRIGHTNESS = 1.45
CONTRAST = 1.12
COLOR = 1.08

# 輸出橫幅比例（寬:高）
RATIO = 16 / 9


def crop_one(filename: str, focus: float) -> None:
    """裁切單張照片：以 focus 為垂直中心切出 16:9 橫幅並增強後輸出。"""
    src = os.path.join(SRC_DIR, filename)
    im = Image.open(src).convert("RGB")
    w, h = im.size

    # 以原圖寬度為基準，計算 16:9 橫幅高度
    band_h = int(w / RATIO)
    center_y = int(h * focus)
    top = max(0, center_y - band_h // 2)
    bottom = min(h, top + band_h)
    top = max(0, bottom - band_h)  # 觸底時回推，確保高度足夠

    cropped = im.crop((0, top, w, bottom))

    # 影像增強：亮度 -> 對比 -> 飽和
    cropped = ImageEnhance.Brightness(cropped).enhance(BRIGHTNESS)
    cropped = ImageEnhance.Contrast(cropped).enhance(CONTRAST)
    cropped = ImageEnhance.Color(cropped).enhance(COLOR)

    # 統一縮放到 1600 寬，控制檔案大小
    target_w = 1600
    target_h = int(target_w / RATIO)
    cropped = cropped.resize((target_w, target_h), Image.LANCZOS)

    out_name = filename.replace("IMG_", "shot-").replace(".jpg", ".jpg")
    out_path = os.path.join(OUT_DIR, out_name)
    cropped.save(out_path, "JPEG", quality=86, optimize=True)
    print(f"OK  {filename} -> {out_name}  band_h={band_h} top={top}")


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    for filename, focus in FOCUS.items():
        try:
            crop_one(filename, focus)
        except Exception as exc:  # 單張失敗不中斷其餘
            print(f"ERR {filename}: {exc}")


if __name__ == "__main__":
    main()
