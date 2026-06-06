// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：封面章（第一幕，整頁）— 上方標題「參加 COMPUTEX 心得分享」，下方 4 場議程卡橫向滑入
// 單一職責：只定義第一幕內容
// 建立日期：2026-06-06  版本：v3.0（標題＋議程同屏）
import Reveal from "../components/Reveal.jsx";
import SessionCard from "../components/SessionCard.jsx";
import { SESSIONS } from "../data/sessions.js";

function Cover({ go, starts }) {
  return (
    <div className="cover">
      {/* 上：標題 */}
      <div className="cover-head">
        <Reveal i={0} className="eyebrow">COMPUTEX 2026 · 06 / 04 · 南港二館</Reveal>
        <Reveal i={1} as="h1" className="cover-title">
          參加 COMPUTEX<br /><span className="accent">心得分享</span>
        </Reveal>
        <Reveal i={2} className="cover-sub">
          當 AI 成為基本期待 —— 資料主權、安全，與產業落地的一天
        </Reveal>
        <Reveal i={3} className="cover-tag">
          <span className="tag-pill">個人筆記 · 僅供參考</span>
          <span className="dim">用一條主線，帶你快速看完這天的四場重點</span>
        </Reveal>
      </div>

      {/* 下：4 場議程（橫向滑入，點擊跳章） */}
      <div className="cover-agenda">
        <Reveal i={2} className="cover-agenda-label">
          <span className="dim">這天我看了</span>　<b>4 場議程</b>　<span className="dim">· 3 大主題 · 點卡片進入該場</span>
        </Reveal>
        <div className="cover-cards">
          {SESSIONS.map((s, k) => (
            <div className="rx" key={s.key} style={{ animationDelay: `${0.35 + k * 0.12}s` }}>
              <SessionCard {...s} onClick={() => go(starts[s.key])} />
            </div>
          ))}
        </div>
      </div>

      {/* 氛圍粒子 */}
      <div className="cover-particles" aria-hidden>
        {Array.from({ length: 16 }).map((_, k) => (
          <span key={k} style={{
            left: `${(k * 53) % 100}%`, top: `${(k * 37) % 100}%`,
            animationDelay: `${(k % 6) * 0.5}s`, animationDuration: `${4 + (k % 5)}s`,
          }} />
        ))}
      </div>

      <style>{`
        .cover { position: relative; min-height: 82vh; display: flex; flex-direction: column; justify-content: space-between; gap: var(--s6); width: 100%; }
        .cover-head { display: flex; flex-direction: column; gap: var(--s3); }
        .cover-title { font-size: clamp(56px, 8vw, 132px); font-weight: 900; line-height: 1.04; letter-spacing: -0.02em; }
        .cover-sub { font-size: clamp(20px, 2.2vw, 34px); color: var(--ink-dim); line-height: 1.4; text-wrap: pretty; }
        .cover-tag { display: flex; align-items: center; gap: var(--s3); flex-wrap: wrap; font-size: var(--fs-small); margin-top: var(--s1); }
        .tag-pill { display: inline-flex; align-items: center; padding: 5px 14px; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent); background: color-mix(in srgb, var(--accent) 12%, transparent); color: var(--ink); font-weight: 600; letter-spacing: 0.03em; }
        .cover-agenda { display: flex; flex-direction: column; gap: var(--s3); }
        .cover-agenda-label { font-size: var(--fs-lead); }
        .cover-agenda-label b { color: var(--accent); font-weight: 700; }
        .cover-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(16px, 1.4vw, 26px); align-items: stretch; }
        .cover-cards .rx { display: flex; }
        /* 封面卡片精簡，確保與標題同屏 */
        .cover-cards .card { padding: clamp(20px, 1.6vw, 30px); gap: var(--s2); }
        .cover-cards .card-time { font-size: clamp(18px, 1.5vw, 24px); }
        .cover-cards .card-title { min-height: 2.7em; font-size: clamp(17px, 1.35vw, 23px); }
        @media (max-width: 1100px) { .cover-cards { grid-template-columns: repeat(2, 1fr); } }
        .cover-particles { position: absolute; inset: 0; pointer-events: none; z-index: -1; }
        .cover-particles span { position: absolute; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); opacity: 0.3; animation: drift ease-in-out infinite alternate; box-shadow: 0 0 8px var(--accent); }
      `}</style>
    </div>
  );
}

export default {
  key: "cover",
  label: "封面 · 議程",
  accent: "brand",
  beats: [Cover],
};
