// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：章節分隔頁 — 大標主題 + 類型色光暈掃過，作為每章開場
// 單一職責：只負責章節過場的視覺
// 建立日期：2026-06-06  版本：v1.0
import Reveal from "./Reveal.jsx";

export default function Divider({ no, theme, title, sub }) {
  return (
    <div className="divider">
      <div className="sweep" />
      <Reveal i={0} className="eyebrow">{no}</Reveal>
      <Reveal i={1} as="h2" className="divider-theme">{theme}</Reveal>
      {title && <Reveal i={2} className="divider-title">{title}</Reveal>}
      {sub && <Reveal i={3} className="divider-sub dim">{sub}</Reveal>}
      <style>{`
        .divider { position: relative; min-height: 38vh; display: flex; flex-direction: column; justify-content: center; gap: var(--s3); overflow: hidden; width: 100%; }
        .divider .sweep {
          position: absolute; top: 0; bottom: 0; width: 40%;
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 22%, transparent), transparent);
          pointer-events: none;
        }
        .section.is-in .divider .sweep { animation: sweep 1.4s var(--ease) 0.2s both; }
        .divider-theme { font-size: clamp(64px, 8.5vw, 150px); font-weight: 900; line-height: 1.02; letter-spacing: -0.02em; }
        .divider-title { font-size: var(--fs-h3); color: var(--ink); max-width: 40ch; }
        .divider-sub { font-size: var(--fs-lead); max-width: 56ch; }
      `}</style>
    </div>
  );
}
