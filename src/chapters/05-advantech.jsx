// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：CH4 研華 Advantech「Edge AI Computing & WEDA」簡述章 — 依現場即時翻譯整理（無投影片照）
// 單一職責：只定義此章節拍
// 建立日期：2026-06-06  版本：v2.0（改為現場逐字內容）
import BriefBeat from "../components/BriefBeat.jsx";

const Beat = () => (
  <BriefBeat
    no="主題三 · 產業落地 AI 應用"
    theme="從數位到實體"
    title="From Digital to Physical：Edge AI Computing & WEDA"
    speaker="張家豪｜研華 Advantech · 嵌入式事業群 總經理"
    points={[
      { t: "工業級連線，資料零遺失", d: "現場要的是低延遲、高可用、工業級大連線；資料「不能在路上弄丟」——這是 Edge AI 的硬需求。" },
      { t: "工業級資料層", d: "需要一層工業級資料儲存，讓 AI 能就地存取、運算、最佳化，再把結果送回硬體控制設備。" },
      { t: "容器化軟體平台（WEDA）", d: "以容器化的軟體包交付，客戶與夥伴容易導入；用數位雙生協定把「視覺世界」與「物理世界」接起來。" },
    ]}
    vo="從西門子的『數位雙生』到研華的『邊緣落地』連起來看：AI 的最後一哩，是把運算與資料層帶回工廠每一台設備 —— 從數位，真正走回實體。"
    note="依現場即時翻譯整理"
  />
);

export default {
  key: "advantech",
  label: "CH4 · Advantech Edge AI",
  accent: "industry",
  beats: [Beat],
};
