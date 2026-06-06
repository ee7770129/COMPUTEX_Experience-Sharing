# 變更日誌（CHANGELOG）

本專案所有重要變更記錄於此。格式參考 Keep a Changelog，版本依語意化版本（SemVer）。

## [1.0.0] - 2026-06-06

### 初版（Added）
- **捲動式簡報引擎**（`App.jsx`）：全寬區塊垂直堆疊、捲動進度條、目前章節偵測與換色、鍵盤（↓/↑/空白/PageDn/Home/End）翻頁、點空白處自動往下捲、IntersectionObserver 捲入觸發動畫。
- **章節 / 節拍架構**（`registry.js` + `chapters/*`）：章節攤平為 `BEATS`、`CHAPTER_START`、`TOTAL`；節拍支援 `orientation` 與 `bare` 設定。
- **第一幕封面**（`00-cover.jsx`）：標題「參加 COMPUTEX 心得分享」+ 4 場議程卡橫向滑入、可點擊跳章；加入「個人筆記 · 僅供參考」標語。
- **CH1 Synology 數位主權**：10 節拍深講，含 9 張現場照片與 97% / 75% / 90% / 3-2-1-1-0 等大數字動畫。
- **CH2 Cadence 代理 AI**：6 節拍，使用現場真實投影片（Custom Silicon 三 Horizon、複雜度 vs 時程、10–100x、AI 三階段轉型、Super Agent 護欄觀點）。
- **CH3 Siemens / CH4 Advantech**：依現場即時翻譯整理之重點（虛擬 PLC 省 50%、數位雙生、工業級資料層、WEDA 容器化平台）。
- **展場產品章**（`055-products.jsx`）：家崎科技 AI 算力戰情中心、futurenest Xerno，對應回議程主題。
- **結語章**：一條主線（資料 → 安全 → 落地）+ 三個 takeaway。
- **可重用元件**：Section / Reveal / Stat / Shot / VO / ShotBeat / BriefBeat / SessionCard / AgendaScroll / Divider / Footer。
- **設計系統**（`styles/tokens.css`）：深藍夜底 + 三大類型色、`clamp()` 響應式字級、8pt 間距。
- **手機 RWD**（`styles/responsive.css`）：多欄版面在 ≤820px 收為單欄、大數字/大標縮放、議程卡 2 欄→單欄。
- **手機「回到最頂」浮動按鈕**：捲動後出現，僅 ≤820px 顯示。
- **頁尾 Footer**：免責標語、© 2026 emoyilab.com、聯絡信箱。
- **影像前處理**（`tools/crop_images.py`、`tools/crop_new.py`）：現場直式照片裁成 16:9 並提亮。
- **一鍵啟動**（`start.bat`，純 ASCII）：自動清埠 → 必要時 npm install → 啟動 Vite（strictPort 5273）並開瀏覽器。

### 文件（Docs）
- 新增 `CLAUDE.md`（專案說明 + 架構依賴圖）、`API_CONTRACT.md`（模組/元件介面契約）、本 `CHANGELOG.md`。

### 移除（Removed）
- 移除早期「點擊換頁固定舞台」版本遺留的未使用 hooks（`useStageScale`、`useStepper`）。

---
**維護**：emoyilab@gmail.com
