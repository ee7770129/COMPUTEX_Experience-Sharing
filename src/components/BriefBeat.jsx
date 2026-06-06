// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：簡述版型 — 用於無現場照片的議程（講題 / 講者 / 3 點重點 / 口白橋接）
// 單一職責：只負責簡述卡的排列；重點內容為依講題整理之詮釋，非虛構數據
// 建立日期：2026-06-06  版本：v1.0
import Reveal from "./Reveal.jsx";
import VO from "./VO.jsx";

export default function BriefBeat({ no, theme, title, speaker, points, vo, note = "本場未拍現場投影片，以上為依講題整理之重點" }) {
  return (
    <div className="brief">
      <div className="brief-top">
        <Reveal i={0} className="eyebrow">{no}</Reveal>
        <Reveal i={1} as="h2" className="brief-theme">{theme}</Reveal>
        <Reveal i={2} className="brief-title">{title}</Reveal>
        <Reveal i={3} className="brief-speaker dim">{speaker}</Reveal>
      </div>
      <div className="brief-points">
        {points.map((p, k) => (
          <Reveal key={k} i={3 + k} className="bp">
            <span className="bp-no mono">{String(k + 1).padStart(2, "0")}</span>
            <div>
              <div className="bp-t">{p.t}</div>
              <div className="bp-d dim">{p.d}</div>
            </div>
          </Reveal>
        ))}
      </div>
      {vo && <VO i={3 + points.length + 1}>{vo}</VO>}
      <span className="brief-note dim">＊{note}</span>
      <style>{`
        .brief { display: flex; flex-direction: column; gap: clamp(32px, 4.5vh, 64px); position: relative; width: 100%; }
        .brief-top { display: flex; flex-direction: column; gap: var(--s2); }
        .brief-theme { font-size: clamp(56px, 7vw, 110px); font-weight: 900; line-height: 1.04; }
        .brief-title { font-size: var(--fs-h3); color: var(--ink); max-width: 44ch; text-wrap: pretty; }
        .brief-speaker { font-size: var(--fs-body); }
        .brief-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(20px, 2vw, 36px); }
        .bp { background: var(--panel); border: 1px solid var(--line); border-radius: var(--r-m); padding: clamp(28px, 2.5vw, 44px); display: flex; flex-direction: column; gap: var(--s2); min-height: clamp(200px, 24vh, 280px); }
        .bp-no { font-size: clamp(26px, 2.4vw, 34px); font-weight: 700; color: var(--accent); }
        .bp-t { font-size: var(--fs-h3); font-weight: 700; margin-top: var(--s2); }
        .bp-d { font-size: var(--fs-body); line-height: 1.5; margin-top: var(--s1); }
        .brief-note { position: absolute; bottom: -10px; right: 0; font-size: 14px; color: var(--ink-mut); }
        @media (max-width: 900px) { .brief-points { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
