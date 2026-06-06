# COMPUTEX 2026 觀展心得分享

[![線上展示 Live Demo](https://img.shields.io/badge/線上展示-Live%20Demo-3c78f0?style=for-the-badge)](https://ee7770129.github.io/COMPUTEX_Experience-Sharing/)

> 把 2026/06/04 參加 COMPUTEX 的觀展心得，做成「全寬、垂直捲動、捲到即觸發動畫」的捲動式網頁簡報（scrollytelling）。

**線上瀏覽 / Live**：<https://ee7770129.github.io/COMPUTEX_Experience-Sharing/>

> 個人觀展筆記，部分內容經現場即時翻譯整理，**僅供參考**，不代表各廠商官方立場；圖片版權屬原廠商所有。

---

## 特色

- **垂直捲動 + 捲入觸發動畫**：往下捲，新內容依序浮現；大數字 count-up、底線生長、逐項揭露。
- **第一幕同屏**：標題「參加 COMPUTEX 心得分享」+ 4 場議程卡橫向滑入，點卡片直接跳章。
- **全寬版面、響應式**：桌機滿版寬、手機自動收為單欄；含手機「回到最頂」按鈕。
- **點擊翻頁**：點空白處自動往下捲一段；鍵盤 ↓/↑/空白/PageUp/PageDown/Home/End 也可導覽。
- **內容**：Synology 數位主權（10 段，含現場照與 97%/75%/90%/3-2-1-1-0）、Cadence 代理 AI（真實投影片）、Siemens／研華（現場即時翻譯整理）、展場產品掃描、結語主線。

## 技術棧

| 範疇 | 使用 |
|------|------|
| 前端 | React 18 + Vite 5（HMR） |
| 樣式 | 原生 CSS（design tokens）+ 元件 inline style；RWD 覆寫 |
| 動畫 | IntersectionObserver + CSS keyframes（無第三方動畫庫） |
| 字體 | Noto Sans TC / Space Grotesk |
| 影像前處理 | Python + Pillow（`tools/`） |
| 部署 | GitHub Actions → GitHub Pages |

## 快速開始

```bash
# 方式一：雙擊（Windows）
start.bat            # 自動清埠 → 必要時 npm install → 啟動並開瀏覽器

# 方式二：指令
npm install
npm run dev          # http://localhost:5273（HMR，存檔即更新）

# 正式建置 / 預覽
npm run build        # 產物於 dist/
npm run preview
```

## 專案結構

```
src/
├── main.jsx            進入點
├── App.jsx             捲動引擎（進度 / 章節偵測 / 鍵盤 / 點擊 / 回到最頂 / Footer）
├── registry.js         章節彙整（攤平 beats、章節起始索引）
├── data/sessions.js    四場議程單一資料來源
├── chapters/           各章內容（cover / synology / cadence / siemens / advantech / products / takeaway）
├── components/         Section / Reveal / Stat / Shot / VO / ShotBeat / BriefBeat / SessionCard / AgendaScroll / Divider / Footer
└── styles/             tokens / base / animations / responsive
```

詳見 [`CLAUDE.md`](./CLAUDE.md)（架構依賴圖）、[`API_CONTRACT.md`](./API_CONTRACT.md)（模組/元件介面契約）、[`CHANGELOG.md`](./CHANGELOG.md)。

## 部署（GitHub Pages）

推送到 `main` 會自動觸發 [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) 建置並部署。

> 首次需在 repo **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**，之後每次 push `main` 會自動更新。

## 分支策略

- `main`：穩定版／部署來源
- `develop`：日常開發（請在此分支提交，發版再合併到 `main`）

## 聯絡

emoyilab@gmail.com　·　© 2026 emoyilab.com
