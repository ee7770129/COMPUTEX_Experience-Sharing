// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：巨型統計數字 — 捲入視窗時才從 0 滾動到目標值（count-up），含單位與底線生長
// 單一職責：只呈現一個會跳動的大數字
// 建立日期：2026-06-06  版本：v3.0（捲入才觸發）
import { useEffect, useRef, useState } from "react";

export default function Stat({ value, suffix = "", prefix = "", label, duration = 1100 }) {
  const [display, setDisplay] = useState(0);
  const hostRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = hostRef.current;
    let raf = 0;
    const run = () => {
      let start = 0;
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(Math.round(eased * value));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) { started.current = true; run(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);

  return (
    <div className="stat" ref={hostRef}>
      <div className="stat-num mono">{prefix}{display}<span className="stat-suffix">{suffix}</span></div>
      {label && <div className="stat-label">{label}</div>}
      <span className="stat-underline" />
      <style>{`
        .stat { position: relative; display: inline-block; }
        .stat-num { font-size: var(--fs-mega); font-weight: 700; line-height: 0.9; letter-spacing: -0.03em; color: var(--ink); text-shadow: 0 0 70px color-mix(in srgb, var(--accent) 45%, transparent); }
        .stat-suffix { font-size: 0.42em; margin-left: 0.06em; color: var(--accent); font-weight: 600; }
        .stat-label { margin-top: var(--s3); font-size: var(--fs-lead); color: var(--ink-dim); max-width: 26ch; line-height: 1.4; }
        .stat-underline { display: block; height: 6px; margin-top: var(--s3); width: 200px; background: var(--accent); border-radius: 3px; transform-origin: left; box-shadow: 0 0 18px var(--accent); }
        .section.is-in .stat-underline { animation: growLine 0.9s var(--ease) 0.4s both; }
      `}</style>
    </div>
  );
}
