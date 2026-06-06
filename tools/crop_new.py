# -*- coding: utf-8 -*-
# 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
# 功能說明：裁切新增的 Cadence 投影片與展場產品照為 16:9 橫幅並提亮，輸出到 assets/
# 單一職責：只處理本批新圖（與 crop_images.py 分開，不重跑原圖）
# 建立日期：2026-06-06  版本：v1.0
import os
from PIL import Image, ImageEnhance

SRC_DIR = os.path.join("..", "..", "圖檔")
OUT_DIR = os.path.join("..", "public", "assets")
RATIO = 16 / 9
BRIGHTNESS, CONTRAST, COLOR = 1.42, 1.12, 1.08

# 檔名 -> (垂直聚焦比例, 輸出名)
JOBS = {
    "IMG_0612.jpg": (0.42, "cad-0612.jpg"),  # Custom Silicon / Horizon 1-3
    "IMG_0613.jpg": (0.42, "cad-0613.jpg"),  # Rising Complexity / 2yr->6mo
    "IMG_0614.jpg": (0.45, "cad-0614.jpg"),  # AI-Driven Productivity 10-100x
    "IMG_0615.jpg": (0.50, "cad-0615.jpg"),  # Cadence AI Transformation
    "IMG_0617.jpg": (0.45, "cad-0617.jpg"),  # Conversational AI in EDA
    "IMG_0620.jpg": (0.40, "cad-0620.jpg"),  # one-shot LLM -> Super Agents
    "IMG_0639.jpg": (0.42, "prod-0639.jpg"), # 家崎科技 AI 算力戰情中心
    "IMG_0640.jpg": (0.34, "prod-0640.jpg"), # futurenest Xerno workspace
}


def crop_one(src_name, focus, out_name):
    im = Image.open(os.path.join(SRC_DIR, src_name)).convert("RGB")
    w, h = im.size
    band_h = int(w / RATIO)
    center_y = int(h * focus)
    top = max(0, center_y - band_h // 2)
    bottom = min(h, top + band_h)
    top = max(0, bottom - band_h)
    crop = im.crop((0, top, w, bottom))
    crop = ImageEnhance.Brightness(crop).enhance(BRIGHTNESS)
    crop = ImageEnhance.Contrast(crop).enhance(CONTRAST)
    crop = ImageEnhance.Color(crop).enhance(COLOR)
    crop = crop.resize((1600, 900), Image.LANCZOS)
    crop.save(os.path.join(OUT_DIR, out_name), "JPEG", quality=86, optimize=True)
    print(f"OK {src_name} -> {out_name} top={top}")


if __name__ == "__main__":
    for src, (focus, out) in JOBS.items():
        try:
            crop_one(src, focus, out)
        except Exception as exc:
            print(f"ERR {src}: {exc}")
