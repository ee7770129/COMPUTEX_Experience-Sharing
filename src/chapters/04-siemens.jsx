// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：CH3 Siemens「數位雙生及工業 AI」簡述章 — 依現場即時翻譯整理（無投影片照）
// 單一職責：只定義此章節拍
// 建立日期：2026-06-06  版本：v2.0（改為現場逐字內容）
import BriefBeat from "../components/BriefBeat.jsx";

const Beat = () => (
  <BriefBeat
    no="主題三 · 產業落地 AI 應用"
    theme="從熱潮到落地"
    title="西門子的數位雙生及工業 AI"
    speaker="張合翕｜Siemens Taiwan · Chairman, President & CEO"
    points={[
      { t: "虛擬 PLC：軟體化 + 集中化", d: "把 PLC 軟體化、集中管理，程式部署更快、擺脫硬體慣性；省下的設備閒置時間可達 50%，Audi 產線因此跑得更快。" },
      { t: "數位雙生 + 資安一起模擬", d: "助廣達(Quanta)等建數位雙生，從設計、材料檢查、生產、品檢到包裝全程模擬，連數位威脅都一起演練（汽車業 ITFA 169 高標）。" },
      { t: "台灣的另一個黃金十年", d: "台灣是眾多裝置的製造重鎮，正是西門子發揮之處；用技術結合實體與數位、推動永續，不只在台灣、而是全球。" },
    ]}
    vo="製造業要落地，先把產線變成「可模擬、可優化」的數位雙生 —— 這正接續 Synology『先把資料結構化』的痛點：沒有乾淨的營運資料，數位雙生餵不動。"
    note="依現場即時翻譯整理"
  />
);

export default {
  key: "siemens",
  label: "CH3 · Siemens 數位雙生",
  accent: "industry",
  beats: [Beat],
};
