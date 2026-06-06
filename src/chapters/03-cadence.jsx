// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：CH2 Cadence「以代理 AI 擘劃 IC 設計」深講章 — 真實投影片 + 現場即時翻譯整理
// 單一職責：只定義此章節拍
// 建立日期：2026-06-06  版本：v2.0（補上現場投影片與逐字內容）
import Reveal from "../components/Reveal.jsx";
import Stat from "../components/Stat.jsx";
import Shot from "../components/Shot.jsx";
import VO from "../components/VO.jsx";
import ShotBeat from "../components/ShotBeat.jsx";
import Divider from "../components/Divider.jsx";

const A = "/assets";

// 0｜章節分隔
const D0 = () => (
  <Divider
    no="主題二 · 生成式 AI 與智慧內容應用"
    theme="代理 AI 進晶片"
    title="Cadence｜Dr. Paul Cunningham · SVP & GM, System Verification Group"
    sub="以代理 AI 擘劃 IC 設計新樣貌 —— 當 AI 開始自己寫 RTL、抓 bug、收斂設計。"
  />
);

// 1｜客製矽晶的空前需求（三個 Horizon）
const B1 = () => (
  <ShotBeat
    eyebrow="趨勢 · Unprecedented Demand for Custom Silicon"
    title="AI 推動半導體的三個地平線"
    shot={{ src: `${A}/cad-0612.jpg`, tag: "IMG_0612", caption: "半導體市場朝 $2.0T 前進，需求由三個 Horizon 驅動" }}
    vo="Horizon 1（1–3 年）基礎設施 AI、Horizon 2（2–7 年）實體 AI、Horizon 3（5–10 年）科學 AI —— 每一層都需要更客製、更複雜的晶片，把半導體推向兩兆美元規模。"
  />
);

// 2｜複雜度上升、時程縮短
const B2 = () => (
  <div className="sb">
    <div className="sb-cols">
      <div className="col gap-4">
        <Reveal i={0} className="eyebrow">挑戰 · Rising Complexity, Shrinking Schedules</Reveal>
        <Reveal i={1} as="h2" className="h2">複雜度爆炸，時程卻被腰斬</Reveal>
        <div className="row gap-5" style={{ alignItems: "flex-end", flexWrap: "wrap" }}>
          <Reveal i={2}><Stat value={335} suffix="B" label="單顆晶片電晶體數（複雜度持續攀升）" /></Reveal>
          <Reveal i={3} className="schedule">
            <span className="dim mono">設計時程</span>
            <span className="sch-from mono">2 年</span>
            <span className="sch-arrow">→</span>
            <span className="sch-to mono accent">6 個月</span>
          </Reveal>
        </div>
      </div>
      <Reveal i={2} className="sb-img"><Shot src={`${A}/cad-0613.jpg`} tag="IMG_0613" caption="先進封裝 + 設計爆炸，時程從 2 年壓到 6 個月" /></Reveal>
    </div>
    <VO i={4}>電晶體數、先進封裝、簽核複雜度同時暴增，但市場只給你過去四分之一的時間。傳統做法已經追不上 —— 這就是 AI 必須進場的理由。</VO>
    <style>{`.sb{display:flex;flex-direction:column;gap:clamp(28px,4vh,56px)}.sb-cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,5vw,90px);align-items:center}.sb-img .shot{width:100%;aspect-ratio:16/9}.schedule{display:flex;align-items:baseline;gap:var(--s2);font-size:clamp(28px,3.4vw,56px);font-weight:700}.sch-arrow{color:var(--ink-mut)}@media(max-width:900px){.sb-cols{grid-template-columns:1fr}}`}</style>
  </div>
);

// 3｜AI 驅動的生產力：10–100x
const B3 = () => (
  <div className="sb">
    <div className="sb-cols">
      <div className="col gap-4">
        <Reveal i={0} className="eyebrow">解法 · New Era of AI-Driven Productivity</Reveal>
        <Reveal i={1} as="h2" className="h2">用「抽象化 + 重用」把生產力拉高</Reveal>
        <Reveal i={2}><Stat value={100} prefix="" suffix="x" label="AI 對 IC 設計生產力的提升（10–100 倍，從 Spec 到 Layout）" /></Reveal>
      </div>
      <Reveal i={2} className="sb-img"><Shot src={`${A}/cad-0614.jpg`} tag="IMG_0614" caption="每一層抽象化 10x，疊加後 AI 帶來 10–100x" /></Reveal>
    </div>
    <VO i={4}>從手繪佈局、電晶體、標準元件、階層設計到 RTL、Design IP，每一層抽象化各帶來約 10 倍效益；AI 再把整條鏈的生產力推到 10–100 倍，並讓設計可被「重用」。</VO>
    <style>{`.sb{display:flex;flex-direction:column;gap:clamp(28px,4vh,56px)}.sb-cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,5vw,90px);align-items:center}.sb-img .shot{width:100%;aspect-ratio:16/9}@media(max-width:900px){.sb-cols{grid-template-columns:1fr}}`}</style>
  </div>
);

// 4｜Cadence AI 三階段轉型
const B4 = () => (
  <ShotBeat
    mediaBig
    eyebrow="路線 · Cadence AI Transformation"
    title="從最佳化 AI → 對話式 AI → 代理式 AI"
    lead="Optimization AI（非 LLM 的機器學習，改善 PPA/QoR）→ Conversational AI（用 LLM 自然語言操作工具、寫腳本、解讀報告）→ Agentic AI（多步推理，自動寫 RTL、抓根因修 bug、收斂 PPA、做電氣簽核）。"
    shot={{ src: `${A}/cad-0615.jpg`, tag: "IMG_0615", caption: "Cadence AI 三階段：Optimization → Conversational → Agentic" }}
    vo="這三階段正是「AI 從工具變夥伴」的路徑 —— 最後一階的 Agentic AI，已經能自己寫測試、找 bug、做訊號簽核。"
  />
);

// 5｜從單發 LLM 到 AI 超級代理（含護欄觀點）
const B5 = () => (
  <ShotBeat
    mediaBig
    eyebrow="關鍵 · From one-shot LLM to AI Super Agents"
    title="光靠一次 LLM 不夠，要「腳手架 + 護欄」"
    lead="One-shot LLM → 加上 RAG 與 Skill → 對話式 → Agentic 工作流的 Super Agent：把複雜任務拆解，串接 EDA 工具、知識圖譜與記憶體反覆推理。"
    shot={{ src: `${A}/cad-0620.jpg`, tag: "IMG_0620", caption: "One-shot LLM → RAG/Skill → Conversational → Agentic Super Agent" }}
    vo="講者原話：任務複雜度非常高，不能把一切都丟給 LLM —— 你得建立複雜的流程與護欄(guardrail)，並用過去 30、40 年累積的「接地工具」反覆迭代；資料還得整理成語意資料庫，也就是知識圖譜。這跟 Synology 的『先把資料結構化』完全呼應。"
  />
);

export default {
  key: "cadence",
  label: "CH2 · Cadence 代理 AI",
  accent: "genai",
  beats: [D0, B1, B2, B3, B4, B5],
};
