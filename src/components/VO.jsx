// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：口白字幕條 — 放在節拍底部，呈現「痛點→解法」的講者口白
// 單一職責：只負責口白文字的呈現樣式
// 建立日期：2026-06-06  版本：v1.0
import Reveal from "./Reveal.jsx";

export default function VO({ i = 4, children }) {
  return (
    <Reveal i={i} className="vo">
      <span className="vo-bar" />
      <p>{children}</p>
      <style>{`
        .vo {
          position: relative;
          margin-top: auto;
          display: flex; gap: var(--s3); align-items: flex-start;
          max-width: 88ch;
          padding: var(--s3) var(--s4);
          background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%);
          border-radius: var(--r-m);
        }
        .vo-bar { flex: none; width: 4px; align-self: stretch; background: var(--accent); border-radius: 2px; box-shadow: 0 0 12px var(--accent); }
        .vo p { font-size: var(--fs-lead); line-height: 1.55; color: var(--ink); text-wrap: pretty; }
      `}</style>
    </Reveal>
  );
}
