// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：議程橫向卷軸 — 釘住(sticky)一個視窗高，往下捲動時 4 張議程卡橫向滑過
// 單一職責：只負責「垂直捲動 → 水平位移」的換算與呈現；卡片內容用 SessionCard
// 建立日期：2026-06-06  版本：v1.0
import { useEffect, useRef, useState } from "react";
import SessionCard from "./SessionCard.jsx";
import { SESSIONS } from "../data/sessions.js";

// 類型色對應（讓卡片序號與卡片同色）
const ACC = { data: "var(--c-data)", genai: "var(--c-genai)", industry: "var(--c-industry)" };

export default function AgendaScroll({ go, starts }) {
  const wrapRef = useRef(null);   // 高的外層，提供捲動行程
  const trackRef = useRef(null);  // 水平卡片列
  const [p, setP] = useState(0);          // 0~1 捲動進度
  const [maxShift, setMaxShift] = useState(0); // 水平最大位移(px)

  // 量測水平需要位移的距離（卡片列總寬 - 視窗寬）
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setMaxShift(Math.max(0, track.scrollWidth - window.innerWidth + 120));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // 捲動進度：外層頂端捲過視窗的比例
  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      setP(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  return (
    <div className="agx" ref={wrapRef}>
      <div className="agx-stick">
        <div className="agx-head">
          <span className="eyebrow">Agenda · 這天我看了</span>
          <h2 className="agx-title">看了 <span className="accent">4 場</span> 議程</h2>
          <p className="agx-sub dim">往下捲，橫向看完四場 —— 點任一張直接進入該場分享</p>
        </div>
        <div className="agx-track" ref={trackRef} style={{ transform: `translate3d(${-p * maxShift}px,0,0)` }}>
          {SESSIONS.map((s, k) => (
            <div className="agx-card" key={s.key} style={{ "--accent": ACC[s.accent] }}>
              <span className="agx-idx mono">0{k + 1}</span>
              <SessionCard {...s} onClick={() => go(starts[s.key])} />
            </div>
          ))}
        </div>
        <div className="agx-bar"><span style={{ width: `${20 + p * 80}%` }} /></div>
      </div>

      <style>{`
        .agx { position: relative; height: 360vh; }            /* 捲動行程：越高、橫移越慢越順 */
        .agx-stick { position: sticky; top: 0; height: 100vh; overflow: hidden; display: flex; flex-direction: column; justify-content: center; gap: clamp(28px,4vh,56px); padding: clamp(48px,6vh,90px) 0; }
        .agx-head { padding: 0 clamp(44px,6vw,150px); display: flex; flex-direction: column; gap: var(--s2); }
        .agx-title { font-size: clamp(44px,6vw,96px); font-weight: 900; line-height: 1.05; }
        .agx-sub { font-size: var(--fs-lead); }
        .agx-track { display: flex; gap: clamp(24px,2.5vw,44px); align-items: stretch; padding: 0 clamp(44px,6vw,150px); will-change: transform; }
        .agx-card { position: relative; flex: none; width: clamp(360px,38vw,600px); display: flex; }
        .agx-idx { position: absolute; top: -6px; right: 10px; z-index: 2; font-size: clamp(40px,4vw,72px); font-weight: 700; color: color-mix(in srgb, var(--accent) 70%, transparent); opacity: .5; pointer-events: none; }
        .agx-bar { margin: 0 clamp(44px,6vw,150px); height: 4px; background: var(--line-soft); border-radius: 2px; }
        .agx-bar span { display: block; height: 100%; background: var(--accent); border-radius: 2px; box-shadow: 0 0 12px var(--accent); transition: width .1s linear; }
      `}</style>
    </div>
  );
}
