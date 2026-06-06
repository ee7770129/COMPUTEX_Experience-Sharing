// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：展場產品章 — 順手記下的兩個產品，並對應到前面議程的主題
// 單一職責：只定義此章節拍
// 建立日期：2026-06-06  版本：v1.0
import ShotBeat from "../components/ShotBeat.jsx";
import Divider from "../components/Divider.jsx";

const A = import.meta.env.BASE_URL + "assets"; // 配合 GitHub Pages 子路徑

// 0｜章節分隔
const D0 = () => (
  <Divider
    no="展場掃描 · Show Floor"
    theme="順手記下的產品"
    title="走逛攤位時，兩個剛好呼應今天主題的產品。"
  />
);

// 1｜家崎科技 — AI 算力全域戰情中心
const P1 = () => (
  <ShotBeat
    mediaBig
    eyebrow="產品一 · 對應「自有 IT · 可觀測性」"
    title="家崎科技 Guchii — AI 算力全域戰情中心"
    lead="Datacenter Command Center：把 GPU 叢集的算力、溫度、健康度、液冷狀態全部視覺化監控（畫面顯示 4214 PFLOPS 最大叢集算力）。"
    shot={{ src: `${A}/prod-0639.jpg`, tag: "IMG_0639", caption: "Guchii 家崎科技 · DATACENTER COMMAND CENTER" }}
    vo="正好呼應 Synology 的『Own Your IT Stack』—— 要掌握自己的基礎設施，先有一個看得見全局的戰情中心。"
  />
);

// 2｜futurenest — Xerno AI 工作區
const P2 = () => (
  <ShotBeat
    mediaBig
    eyebrow="產品二 · 對應「Secure AI Agents 落地」"
    title="futurenest — Xerno AI 工作區"
    lead="把企業流程做成 AI Agent 工作區：AML 反洗錢專區、上市公司徵信工作流、文件自動化等，各專案獨立、可控管權限與稽核。"
    shot={{ src: `${A}/prod-0640.jpg`, tag: "IMG_0640", caption: "futurenest · Xerno workspace（企業 AI Agent 工作區）" }}
    vo="這就是 Cadence／Synology 講的『Agentic AI』真正落到企業場景的樣子 —— 用 Agent 跑流程，但每一步都圈在可控的工作區裡。"
  />
);

export default {
  key: "products",
  label: "展場 · 產品掃描",
  accent: "brand",
  beats: [D0, P1, P2],
};
