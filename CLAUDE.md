# COMPUTEX 2026 觀展分享 - 系統說明

## 專案定位
將 2026/06/04 參加 COMPUTEX 的觀展心得，做成「全寬、垂直捲動、捲到即觸發動畫」的捲動式網頁簡報（scrollytelling）。主體直式、滿版寬，第一幕封面獨佔整頁，往下捲依序揭露各場議程重點；部分概念以寬版大圖橫向呈現。內容含現場投影片照片與現場即時翻譯整理，僅供個人分享參考。

## 頁面結構與命名規範
單頁應用（SPA），由「章（chapter）」與「節拍（beat）」組成，依序垂直堆疊：

| 順序 | 章 key | 標籤 | 內容 |
|------|--------|------|------|
| 1 | cover | 封面 · 議程 | 標題「參加 COMPUTEX 心得分享」+ 4 場議程卡（橫向滑入、可點擊跳章） |
| 2 | synology | CH1 · Synology 數位主權 | 10 節拍深講（含 9 張現場照、97%/75%/90%/3-2-1-1-0） |
| 3 | cadence | CH2 · Cadence 代理 AI | 6 節拍（真實投影片 + 即時翻譯重點） |
| 4 | siemens | CH3 · Siemens 數位雙生 | 1 節拍（依現場即時翻譯整理） |
| 5 | advantech | CH4 · Advantech Edge AI | 1 節拍（依現場即時翻譯整理） |
| 6 | products | 展場 · 產品掃描 | 3 節拍（家崎科技、futurenest） |
| 7 | takeaway | 結語 | 2 節拍（一條主線 + 三個 takeaway）|

- 溝通統一用語：「章 chapter」「節拍 beat」「bare 節拍（自帶版面，如議程橫向卷軸）」。
- 類型色：資料治理=黃(c-data)、生成式 AI=紫(c-genai)、產業落地=粉(c-industry)、品牌=藍(c-brand)。

## 技術選擇
- 前端：React 18 + Vite 5（dev 具 HMR，存檔即更新免 F5）
- 樣式：原生 CSS（CSS 變數 design tokens）+ 元件內 inline `<style>`；RWD 以 `responsive.css` 覆寫
- 字體：Noto Sans TC（中文）/ Space Grotesk（數字與英文）
- 動畫：IntersectionObserver 捲入觸發 + CSS keyframes；無第三方動畫庫
- 影像前處理：Python + Pillow（`tools/` 裁切腳本）

## 端口配置
| 服務 | 預設端口 | 設定檔 |
|------|----------|--------|
| Vite dev server | 5273（strictPort 固定） | `vite.config.js` |

啟動：雙擊 `start.bat`（自動清埠 → 必要時 npm install → 啟動並開瀏覽器）。

## 架構依賴圖

```
分享網頁/
├── index.html                  Vite 入口（掛載 #root、載入 Google Fonts）
├── start.bat                   一鍵啟動（自動清埠 + HMR；純 ASCII）
├── vite.config.js              Vite 設定（port 5273 / strictPort / open）
├── package.json
├── public/
│   └── assets/                 裁切後的現場照片（shot-* / cad-* / prod-*）
├── tools/
│   ├── crop_images.py          裁切 Synology 9 張現場照 → 16:9
│   └── crop_new.py             裁切 Cadence 投影片與展場產品照 → 16:9
└── src/
    ├── main.jsx                進入點（掛載 App + 載入 4 支 CSS）
    ├── App.jsx                 捲動引擎：進度條/章節偵測/鍵盤/點擊翻頁/回到最頂/Footer
    ├── registry.js             章節彙整：攤平 beats、計算章節起始索引
    ├── data/
    │   └── sessions.js         四場議程單一資料來源（SESSIONS）
    ├── chapters/               各章內容（每章 export {key,label,accent,beats[]}）
    │   ├── 00-cover.jsx        封面 + 議程卡
    │   ├── 02-synology.jsx     CH1（10 節拍）
    │   ├── 03-cadence.jsx      CH2（6 節拍）
    │   ├── 04-siemens.jsx      CH3（1 節拍）
    │   ├── 05-advantech.jsx    CH4（1 節拍）
    │   ├── 055-products.jsx    展場產品（3 節拍）
    │   └── 06-takeaway.jsx     結語（2 節拍）
    ├── components/             可重用呈現元件
    │   ├── Section.jsx         捲動區塊（IntersectionObserver → is-in 觸發動畫）
    │   ├── Reveal.jsx          逐項揭露包裝（延遲進場）
    │   ├── Stat.jsx            巨型數字 count-up（捲入才觸發）
    │   ├── Shot.jsx            現場照片框
    │   ├── VO.jsx              口白字幕條
    │   ├── ShotBeat.jsx        標準版型：文字 + 照片（mediaBig 大圖）
    │   ├── BriefBeat.jsx       簡述版型：講題 + 3 重點（無照片場次）
    │   ├── SessionCard.jsx     議程卡
    │   ├── AgendaScroll.jsx    議程橫向卷軸（釘住式，bare 節拍）
    │   ├── Divider.jsx         章節分隔頁
    │   └── Footer.jsx          頁尾（免責標語 + 版權 + 信箱）
    └── styles/
        ├── tokens.css         design tokens（色彩/字級/間距/曲線）
        ├── base.css           版面、chrome、共用排版工具
        ├── animations.css     keyframes 與捲入觸發動畫
        └── responsive.css     手機 RWD 覆寫（多欄收單欄）
```

依賴方向：`main → App → registry → chapters/* → components/* → (data, styles)`。元件不反向依賴章節；資料集中於 `data/sessions.js`。

## 關鍵資料流
1. `registry.js` 匯入所有 `chapters/*`，將每章 `beats[]` 攤平為全域 `BEATS`，並建立 `CHAPTER_START`（章 key → 第一拍索引）。
2. `App` 渲染 `BEATS`：一般節拍包進 `Section`（捲入加 `is-in` 觸發動畫）；`bare` 節拍只包一層帶 ref 的容器（自帶版面）。
3. `App` 監聽捲動 → 更新進度條與目前章節（chrome 換色）；提供 `go(index)` 平滑捲動；議程卡以 `go(CHAPTER_START[key])` 跳章。

## 介面契約
詳見 `API_CONTRACT.md`（本專案為純前端，契約指「模組 / 元件介面」）。

## 開發指引
```bash
# 開發（自動清埠 + HMR）
雙擊 start.bat        # 或： npm install && npm run dev
# 正式建置
npm run build         # 產物於 dist/
npm run preview       # 本機預覽建置結果
# 影像裁切（如新增現場照）
cd tools && python crop_new.py
```

## 變更日誌
詳見 `CHANGELOG.md`。

---
**文檔版本**：v1.0.0
**建立日期**：2026-06-06
**最後更新**：2026-06-06（專案初版：捲動式觀展分享簡報）
