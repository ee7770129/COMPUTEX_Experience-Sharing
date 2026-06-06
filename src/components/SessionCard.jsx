// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：議程卡片 — 重繪 COMPUTEX 議程卡（時間／講題／講者／類型色條）
// 單一職責：只負責一張議程卡的呈現，點擊可跳到該章
// 建立日期：2026-06-06  版本：v1.0
const ACCENT = { data: "var(--c-data)", genai: "var(--c-genai)", industry: "var(--c-industry)" };

export default function SessionCard({ time, title, speaker, org, role, topic, accent, active, onClick }) {
  return (
    <button className={`card ${active ? "is-active" : ""}`} onClick={onClick} style={{ "--ca": ACCENT[accent] }}>
      <span className="card-bar" />
      <div className="card-time mono">{time}</div>
      <div className="card-title">{title}</div>
      <div className="card-foot">
        <div className="card-speaker">{speaker} <span className="dim">· {org}</span></div>
        <div className="card-role dim">{role}</div>
        <div className="card-topic">{topic}</div>
      </div>
      <style>{`
        .card {
          position: relative; text-align: left; cursor: pointer;
          flex: 1; min-width: 0;
          background: var(--panel); border: 1px solid var(--line);
          border-radius: var(--r-m); padding: var(--s4) var(--s4) var(--s4) calc(var(--s4) + 10px);
          color: var(--ink); display: flex; flex-direction: column; gap: var(--s3);
          transition: transform 0.35s var(--ease), background 0.35s, border-color 0.35s;
        }
        .card:hover, .card.is-active { transform: translateY(-8px); background: var(--panel-2); border-color: color-mix(in srgb, var(--ca) 55%, transparent); }
        .card-bar { position: absolute; left: 0; top: 18px; bottom: 18px; width: 5px; border-radius: 3px; background: var(--ca); box-shadow: 0 0 14px var(--ca); }
        .card-time { font-size: 26px; font-weight: 600; color: var(--ink); }
        .card-title { font-size: 25px; font-weight: 700; line-height: 1.25; min-height: 3.4em; text-wrap: pretty; }
        .card-foot { margin-top: auto; display: flex; flex-direction: column; gap: 4px; }
        .card-speaker { font-size: 18px; font-weight: 600; }
        .card-role { font-size: 15px; }
        .card-topic { margin-top: 8px; font-size: 14px; font-weight: 600; color: var(--ca); letter-spacing: 0.02em; }
      `}</style>
    </button>
  );
}
