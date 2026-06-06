// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：章節彙整表 — 匯入所有章節、攤平成單一節拍清單、計算各章起始索引
// 單一職責：只負責「組裝順序」，不含呈現或導覽邏輯
// 節拍可為「組件」或「{ Comp, orientation }」物件；orientation 預設 'portrait'
// 建立日期：2026-06-06  版本：v2.0（支援每拍方向）
import cover from "./chapters/00-cover.jsx";
import synology from "./chapters/02-synology.jsx";
import cadence from "./chapters/03-cadence.jsx";
import siemens from "./chapters/04-siemens.jsx";
import advantech from "./chapters/05-advantech.jsx";
import products from "./chapters/055-products.jsx";
import takeaway from "./chapters/06-takeaway.jsx";

const CHAPTERS = [cover, synology, cadence, siemens, advantech, products, takeaway];

export const BEATS = [];
export const CHAPTER_START = {};

CHAPTERS.forEach((ch) => {
  CHAPTER_START[ch.key] = BEATS.length;
  ch.beats.forEach((entry, i) => {
    // 支援兩種寫法：直接給組件，或給 { Comp, orientation, bare }
    const isObj = typeof entry !== "function";
    const Comp = isObj ? entry.Comp : entry;
    BEATS.push({
      key: ch.key,
      label: ch.label,
      accent: ch.accent,
      orientation: isObj ? entry.orientation || "portrait" : "portrait",
      bare: isObj ? !!entry.bare : false, // bare：自帶版面，不套標準 Section 外框
      idxInChapter: i,
      chapterTotal: ch.beats.length,
      Comp,
    });
  });
});

export const TOTAL = BEATS.length;
