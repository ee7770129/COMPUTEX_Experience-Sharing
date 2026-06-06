// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：CH1 群暉 Synology「數位主權」深講章 — 全寬捲動版型，涵蓋全部 9 張現場照片
// 單一職責：只定義此章的節拍內容
// 建立日期：2026-06-06  版本：v3.0（全寬捲動）
import Reveal from "../components/Reveal.jsx";
import Stat from "../components/Stat.jsx";
import Shot from "../components/Shot.jsx";
import VO from "../components/VO.jsx";
import ShotBeat from "../components/ShotBeat.jsx";
import Divider from "../components/Divider.jsx";

const A = import.meta.env.BASE_URL + "assets"; // 配合 GitHub Pages 子路徑

// 0｜章節分隔
const D0 = () => (
  <Divider
    no="主題一 · 資料智能、治理與安全"
    theme="數位主權"
    title="群暉科技 Synology｜陳其賦 Managing Director"
    sub="數位主權趨勢加劇「資料重力」與在地化需求 —— 為什麼資料該留在自己手上。"
  />
);

// 1｜AI 已是基本期待：97% / 32%
const B1 = () => (
  <div className="sb">
    <Reveal i={0} className="eyebrow">開場 · AI is now a baseline</Reveal>
    <Reveal i={1} as="h2" className="h2">AI 已是每個人的「基本期待」</Reveal>
    <div className="sb-cols">
      <div className="stat-pair">
        <Reveal i={2}><Stat value={97} suffix="%" label="員工已用個人 GenAI 帳號處理工作" /></Reveal>
        <Reveal i={3}><Stat value={32} suffix="%" label="曾把敏感資料輸入未核可的 AI 工具" /></Reveal>
      </div>
      <Reveal i={3} className="sb-img"><Shot src={`${A}/shot-0601.jpg`} tag="IMG_0601" caption="Synology 開場：AI 已是基本期待" /></Reveal>
    </div>
    <VO i={4}>當每個員工都在用 AI，影子 IT 也同步發生 —— 資料正在「無聲外流」。整場的起點：不是要不要用 AI，而是怎麼安全地用。</VO>
    <style>{`.sb{display:flex;flex-direction:column;gap:clamp(28px,4vh,56px)}.sb-cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,5vw,90px);align-items:center}.stat-pair{display:flex;flex-direction:column;gap:var(--s5)}.sb-img .shot{width:100%;aspect-ratio:16/9}@media(max-width:900px){.sb-cols{grid-template-columns:1fr}}`}</style>
  </div>
);

// 2｜數位主權之戰
const B2 = () => (
  <ShotBeat
    eyebrow="趨勢 · Digital Sovereignty"
    title="這是一場「主權之戰」"
    shot={{ src: `${A}/shot-0602.jpg`, tag: "IMG_0602", caption: "各國以國家基金搶建自主 AI / 雲基礎設施" }}
    vo="歐盟《Cloud and AI Development Act》、南韓逾千億美元國家成長基金、中國國家創投引導基金 —— 各國都在把運算與資料「拿回境內」。資料放在哪、誰能存取，成了戰略問題。"
  >
    <Reveal i={3} className="quote">「This is our fight for sovereignty. We want our cloud, our data centers, our computing capacities.」
      <span className="dim"> — Macron, VivaTech 2025</span>
    </Reveal>
    <style>{`.quote{font-size:var(--fs-h3);line-height:1.4;color:var(--ink);border-left:4px solid var(--accent);padding-left:var(--s3);text-wrap:pretty}`}</style>
  </ShotBeat>
);

// 3｜雲端不是萬靈丹
const B3 = () => (
  <ShotBeat
    eyebrow="風險一 · Reliability"
    title="「everything fails all the time」"
    lead="公有雲也會大規模中斷：AWS 中東節點受地緣事件影響降級、各家雲服務都出過大事故。把命脈全押在單一雲，風險被低估了。"
    shot={{ src: `${A}/shot-0603.jpg`, tag: "IMG_0603", caption: "Werner Vogels（Amazon CTO）：故障是常態" }}
    vo="可用性不是 SLA 數字好看就沒事 —— 真正的問題是：當雲掛掉，你的資料與服務還能不能自己撐住？"
  />
);

// 4｜供應鏈風險 75%
const B4 = () => (
  <div className="sb">
    <div className="sb-cols">
      <div className="col gap-4">
        <Reveal i={0} className="eyebrow">風險二 · Software Supply Chain</Reveal>
        <Reveal i={1} as="h2" className="h2">供應鏈正在成為破口</Reveal>
        <Reveal i={2}><Stat value={75} suffix="%" label="惡意套件年增率（進入軟體供應鏈的惡意套件）" /></Reveal>
      </div>
      <Reveal i={2} className="sb-img"><Shot src={`${A}/shot-0604.jpg`} tag="IMG_0604" caption="75% — 惡意套件年增（State of the Software Supply Chain）" /></Reveal>
    </div>
    <VO i={4}>外部依賴越多，能信任的越少。資料治理的前提，是先把「自己能控制的範圍」劃出來。</VO>
    <style>{`.sb{display:flex;flex-direction:column;gap:clamp(28px,4vh,56px)}.sb-cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,5vw,90px);align-items:center}.sb-img .shot{width:100%;aspect-ratio:16/9}@media(max-width:900px){.sb-cols{grid-template-columns:1fr}}`}</style>
  </div>
);

// 5｜解方框架 Own Your IT Stack（三欄）
const B5 = () => (
  <div className="sb">
    <Reveal i={0} className="eyebrow">解方 · Own Your IT Stack</Reveal>
    <Reveal i={1} as="h2" className="h2" style={{ marginBottom: "var(--s2)" }}>把 IT 主導權拿回來，三根支柱</Reveal>
    <div className="pillars">
      {[
        ["01", "Data Ownership", "資料留在自己掌控的基礎設施，清楚知道資料在哪、誰能碰"],
        ["02", "Secure AI", "在自有環境內安全地用 AI，敏感資料不外送第三方"],
        ["03", "Reliable DR", "可靠的備份與災難復原，雲掛了也能自己撐住"],
      ].map(([no, t, d], k) => (
        <Reveal key={no} i={2 + k} className="pillar">
          <span className="pillar-no mono">{no}</span>
          <div className="pillar-t">{t}</div>
          <div className="pillar-d dim">{d}</div>
        </Reveal>
      ))}
    </div>
    <VO i={5}>這三件事，正好對應前面三個風險：外流、雲故障、供應鏈。接著逐一拆解 Synology 怎麼做。</VO>
    <style>{`
      .sb{display:flex;flex-direction:column;gap:clamp(24px,3.5vh,48px)}
      .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(24px,2.5vw,40px)}
      .pillar{background:var(--panel);border:1px solid var(--line);border-radius:var(--r-l);padding:clamp(32px,3vw,52px);display:flex;flex-direction:column;gap:var(--s2);min-height:clamp(240px,30vh,340px)}
      .pillar-no{font-size:clamp(48px,5vw,76px);font-weight:700;color:var(--accent)}
      .pillar-t{font-size:var(--fs-h3);font-weight:700;margin-top:var(--s2)}
      .pillar-d{font-size:var(--fs-body);line-height:1.5;margin-top:auto}
      @media(max-width:900px){.pillars{grid-template-columns:1fr}}
    `}</style>
  </div>
);

// 6｜★ 90% 非結構化資料 —— 你舉例的痛點
const B6 = () => (
  <div className="sb">
    <div className="sb-cols">
      <div className="col gap-4">
        <Reveal i={0} className="eyebrow">支柱一展開 · Data Intelligence Built-in</Reveal>
        <Reveal i={1} as="h2" className="h2">資料有了，卻「用不出來」</Reveal>
        <Reveal i={2}><Stat value={90} suffix="%" label="企業資料是非結構化的：文件、音檔、影像、PDF 散落各處、未被索引" /></Reveal>
      </div>
      <Reveal i={2} className="sb-img"><Shot src={`${A}/shot-0606.jpg`} tag="IMG_0606" caption="Data Intelligence Built-in：語意搜尋 / 轉錄 / 標註 / 擷取" /></Reveal>
    </div>
    <VO i={4}>AI 加速製造業走向自動化與智慧化；但第一道難題往往是 —— 舊資料全躺在 NAS 上，沒有正規化、沒有結構化處理。Synology 的答案是把「資料智能」內建進儲存層：語意搜尋、轉錄索引、多模態標註、把掃描檔變成可查詢的結構化文字，讓資料在原地就能被 AI 用。</VO>
    <style>{`.sb{display:flex;flex-direction:column;gap:clamp(28px,4vh,56px)}.sb-cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,5vw,90px);align-items:center}.sb-img .shot{width:100%;aspect-ratio:16/9}@media(max-width:900px){.sb-cols{grid-template-columns:1fr}}`}</style>
  </div>
);

// 7｜Secure AI Agents（大圖架構）
const B7 = () => (
  <ShotBeat
    mediaBig
    eyebrow="支柱二展開 · Secure AI"
    title="Secure AI Agents：把 AI 關進護欄裡"
    lead="DSM Agent 在權限、意圖、範圍上設 Guardrails；輸出端做 DLP 與去識別化，所有存取留下稽核紀錄。AI 能查檔、回答、做維運，但碰不到不該碰的資料。"
    shot={{ src: `${A}/shot-0607.jpg`, tag: "IMG_0607", caption: "Secure AI Agents 架構：Input/Output Guardrails + DSM 稽核" }}
    vo="重點不是「有沒有 AI」，而是 AI 的每個動作都可控、可稽核、可還原 —— 這是企業敢真正落地的關鍵。"
  />
);

// 8｜ActiveProtect 備份架構（大圖架構）
const B8 = () => (
  <ShotBeat
    mediaBig
    eyebrow="支柱三展開 · Reliable DR"
    title="ActiveProtect：集中式備份與不可變副本"
    lead="跨實體機、VM、SaaS 與雲端工作負載，集中管理、不可變備份副本，支援即時還原與物件儲存異地復原。雲掛了，也能從自己的副本快速站起來。"
    shot={{ src: `${A}/shot-0608.jpg`, tag: "IMG_0608", caption: "ActiveProtect：集中管理 + 不可變副本 + 多目標還原" }}
    vo="備份不是「有做就好」，而是要能在最壞情況下真的還原回來 —— 這帶到最後的黃金法則。"
  />
);

// 9｜New Golden Rule 3-2-1-1-0
const B9 = () => (
  <div className="sb center">
    <Reveal i={0} className="eyebrow">結語 · New Golden Rule</Reveal>
    <Reveal i={1} className="rule mono">3<span>-</span>2<span>-</span>1<span>-</span>1<span>-</span>0</Reveal>
    <div className="rule-legend">
      {[["3", "份副本", "Copies"], ["2", "種媒介", "Mediums"], ["1", "份異地", "Offsite"], ["1", "份不可變", "Immutable"], ["0", "個錯誤", "Errors"]].map(([n, zh, en], k) => (
        <Reveal key={en} i={2 + k} className="leg">
          <div className="leg-n mono">{n}</div>
          <div className="leg-zh">{zh}</div>
          <div className="leg-en dim mono">{en}</div>
        </Reveal>
      ))}
    </div>
    <VO i={7}>從「資料主權」一路講到「3-2-1-1-0」黃金法則 —— Synology 想說的是：AI 時代，先掌握自己的資料，才談得上安全與落地。</VO>
    <style>{`
      .sb.center{display:flex;flex-direction:column;align-items:center;text-align:center;gap:clamp(28px,4vh,56px)}
      .rule{font-size:clamp(90px,13vw,240px);font-weight:700;letter-spacing:.02em;line-height:1;color:var(--ink);text-shadow:0 0 70px color-mix(in srgb,var(--accent) 50%,transparent)}
      .rule span{color:var(--accent);margin:0 .02em}
      .rule-legend{display:flex;justify-content:center;gap:clamp(24px,4vw,72px);flex-wrap:wrap}
      .leg{text-align:center}
      .leg-n{font-size:clamp(36px,4vw,56px);font-weight:700;color:var(--accent)}
      .leg-zh{font-size:var(--fs-body);font-weight:600;margin-top:6px}
      .leg-en{font-size:var(--fs-small);letter-spacing:.06em;margin-top:2px}
    `}</style>
  </div>
);

export default {
  key: "synology",
  label: "CH1 · Synology 數位主權",
  accent: "data",
  beats: [D0, B1, B2, B3, B4, B5, B6, B7, B8, B9],
};
