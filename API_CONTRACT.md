# 介面契約（API Contract）

> 本專案為**純前端**靜態網頁，無後端 HTTP API。此處「契約」指**模組與元件的對外介面**：
> 章節資料結構、節拍模型、元件 props。任何新增章節 / 節拍 / 元件都應遵循以下契約。

**版本**：v1.0.0　**最後更新**：2026-06-06

---

## 1. 章節模組契約（chapters/*.jsx）

每個章節檔 `export default` 一個物件：

```ts
interface Chapter {
  key: string;        // 章節唯一鍵（亦為 CHAPTER_START 的 key、議程卡跳章目標）
  label: string;      // 顯示於左上章節膠囊，如 "CH1 · Synology 數位主權"
  accent: AccentKey;  // 章節主題色
  beats: BeatEntry[]; // 由上而下的節拍清單
}

type AccentKey = "data" | "genai" | "industry" | "brand";

// 節拍可為「React 組件」或「設定物件」
type BeatEntry =
  | React.ComponentType<BeatProps>
  | { Comp: React.ComponentType<BeatProps>; orientation?: "portrait" | "landscape"; bare?: boolean };
```

- `orientation: "landscape"` → 由 `Section` 套用寬版（`section--wide`）。
- `bare: true` → 該節拍自帶版面，`App` 不套標準 `Section` 外框（用於 `AgendaScroll` 橫向卷軸）。

## 2. 節拍組件 props（BeatProps）

`App` 渲染每個節拍組件時注入：

```ts
interface BeatProps {
  go: (index: number) => void;        // 平滑捲動到第 index 個節拍
  starts: Record<string, number>;     // 章 key → 第一拍全域索引（= CHAPTER_START）
}
```
用法：議程卡 `onClick={() => go(starts["synology"])}`。

## 3. registry.js 對外匯出

```ts
export const BEATS: Array<{
  key: string; label: string; accent: AccentKey;
  orientation: "portrait" | "landscape"; bare: boolean;
  idxInChapter: number; chapterTotal: number;
  Comp: React.ComponentType<BeatProps>;
}>;
export const CHAPTER_START: Record<string, number>; // 章 key → 第一拍索引
export const TOTAL: number;                          // 節拍總數
```

## 4. 資料契約（data/sessions.js）

```ts
export const SESSIONS: Array<{
  key: string;      // 對應章節 key（跳章用）
  time: string;     // "11:00"
  title: string;
  speaker: string;
  org: string;
  role: string;
  topic: string;    // 類型文字
  accent: "data" | "genai" | "industry";
}>;
```

## 5. 共用元件 props

| 元件 | Props | 說明 |
|------|-------|------|
| `Section` | `{ accent: AccentKey; wide?: boolean; ref: (el)=>void; children }` | 捲入視窗加 `is-in` 觸發動畫；`ref` 回傳 DOM 供導覽定位 |
| `Reveal` | `{ i?: number; as?: string; className?; style?; children }` | 逐項揭露，延遲 = 0.12 + i×0.1 秒 |
| `Stat` | `{ value:number; suffix?; prefix?; label?; duration?=1100 }` | 捲入時 count-up（IntersectionObserver, threshold 0.5）|
| `Shot` | `{ src:string; caption?; tag? }` | 現場照片框（16:9）|
| `VO` | `{ i?=4; children }` | 口白字幕條 |
| `ShotBeat` | `{ eyebrow?; title?; lead?; children?; shot?:ShotProps; vo?; mediaBig?:boolean }` | 文字+照片標準版型；`mediaBig` 放大照片 |
| `BriefBeat` | `{ no; theme; title; speaker; points:{t,d}[]; vo?; note? }` | 無照片場次簡述（3 重點）|
| `SessionCard` | `{ time;title;speaker;org;role;topic;accent;active?;onClick }` | 議程卡 |
| `AgendaScroll` | `BeatProps`（`{go, starts}`） | 釘住式議程橫向卷軸（bare 節拍）|
| `Divider` | `{ no; theme; title?; sub? }` | 章節分隔頁 |
| `Footer` | （無）| 頁尾：免責標語 + © 2026 emoyilab.com + 信箱 |

## 6. 樣式契約（CSS 變數，tokens.css）

- 色彩：`--bg`, `--ink`, `--ink-dim`, `--accent`（依 `[data-accent]` 切換）、`--c-data/-genai/-industry/-brand`
- 字級：`--fs-mega/-h1/-h2/-h3/-lead/-body/-small/-label`（皆 `clamp()` 響應式）
- 間距：`--s1`～`--s8`（8pt grid）；曲線：`--ease`, `--ease-soft`
- 章節色由容器 `data-accent` 屬性設定（`Section` 與 `bare` 容器共用）。

## 7. 擴充規範（新增一章）
1. 在 `chapters/` 新增檔案，`export default` 符合 §1 的 Chapter 物件。
2. 在 `registry.js` 的 `CHAPTERS` 陣列依顯示順序插入。
3. 節拍組件透過 `BeatProps` 取得 `go`/`starts`；需照片先以 `tools/` 裁成 16:9 放入 `public/assets/`。
4. 沿用既有元件與 tokens，勿新增 design token 以外的硬編碼色值。
