// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：結語章 — 一條主線串起四場 + 三個 takeaway（2 拍）
// 單一職責：只定義結語節拍
// 建立日期：2026-06-06  版本：v1.0
import Reveal from "../components/Reveal.jsx";

// 1｜一條主線
const Thread = () => (
  <div className="tw">
    <Reveal i={0} className="eyebrow">把四場連起來</Reveal>
    <Reveal i={1} as="h2" className="h2" style={{ marginBottom: "var(--s5)" }}>一條主線：資料 → 安全 → 落地</Reveal>
    <div className="flow">
      {[
        ["資料主權", "Synology", "data", "先掌握自己的資料"],
        ["安全的 AI", "Synology / Cadence", "genai", "在護欄內用 AI"],
        ["產業落地", "Siemens / 研華", "industry", "從雲走回工廠現場"],
      ].map(([t, who, ac, d], k) => (
        <Reveal key={t} i={2 + k} className="flow-node" style={{ "--nc": `var(--c-${ac})` }}>
          <div className="flow-t">{t}</div>
          <div className="flow-who dim mono">{who}</div>
          <div className="flow-d dim">{d}</div>
          {k < 2 && <span className="flow-arrow">→</span>}
        </Reveal>
      ))}
    </div>
    <style>{`
      .tw{width:100%;display:flex;flex-direction:column;justify-content:center}
      .flow{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(40px,5vw,80px);align-items:stretch}
      @media(max-width:900px){.flow{grid-template-columns:1fr}.flow-arrow{display:none}}
      .flow-node{position:relative;background:var(--panel);border:1px solid var(--line);border-top:4px solid var(--nc);border-radius:var(--r-m);padding:var(--s5);display:flex;flex-direction:column;gap:var(--s2)}
      .flow-t{font-size:38px;font-weight:800;color:var(--nc)}
      .flow-who{font-size:17px;letter-spacing:.04em}
      .flow-d{font-size:21px;margin-top:var(--s2)}
      .flow-arrow{position:absolute;right:-44px;top:50%;transform:translateY(-50%);font-size:40px;color:var(--ink-mut)}
    `}</style>
  </div>
);

// 2｜三個帶走的重點 + 收尾
const Takeaways = () => (
  <div className="tw2">
    <Reveal i={0} className="eyebrow">我帶走的三件事</Reveal>
    <div className="ta-list">
      {[
        ["先有資料治理，才有 AI", "90% 企業資料是非結構化的。AI 落地的第一步，是把躺在 NAS 的舊資料變得可搜尋、可用。"],
        ["主權與韌性是同一件事", "資料留在自己手上、雲掛了也能自己撐住 —— 3-2-1-1-0 不只是備份，是營運底氣。"],
        ["落地 = 從雲回到實體", "數位雙生、邊緣運算把 AI 帶回工廠現場；價值發生在實體世界，不在投影片上。"],
      ].map(([t, d], k) => (
        <Reveal key={t} i={1 + k} className="ta">
          <span className="ta-no mono">0{k + 1}</span>
          <div className="ta-t">{t}</div>
          <div className="ta-d dim">{d}</div>
        </Reveal>
      ))}
    </div>
    <Reveal i={4} className="end mono">COMPUTEX 2026 · 06/04　—　感謝觀看</Reveal>
    <style>{`
      .tw2{width:100%;display:flex;flex-direction:column;justify-content:center;gap:var(--s5)}
      .ta-list{display:flex;flex-direction:column;gap:var(--s3)}
      .ta{position:relative;display:grid;grid-template-columns:120px 1fr;align-items:center;gap:var(--s4);background:var(--panel);border:1px solid var(--line);border-radius:var(--r-m);padding:var(--s4) var(--s5)}
      .ta-no{grid-row:span 2;font-size:64px;font-weight:700;color:var(--accent)}
      .ta-t{font-size:30px;font-weight:700}
      .ta-d{font-size:20px;line-height:1.5}
      .end{margin-top:var(--s4);font-size:20px;color:var(--ink-mut);letter-spacing:.08em}
    `}</style>
  </div>
);

export default {
  key: "takeaway",
  label: "結語",
  accent: "brand",
  beats: [Thread, Takeaways],
};
