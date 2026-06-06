// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：捲動式簡報引擎 — 全寬區塊垂直堆疊、捲動進度、目前章節偵測、鍵盤翻頁
// 單一職責：只負責「把區塊串起來 + 捲動狀態」，內容在 chapters/、區塊在 Section.jsx
// 建立日期：2026-06-06  版本：v3.0（全寬捲動式）
import { useCallback, useEffect, useRef, useState } from "react";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import { BEATS, TOTAL, CHAPTER_START } from "./registry.js";

export default function App() {
  const sectionEls = useRef([]); // 各區塊 DOM
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // 捲到指定區塊（議程卡跳章、鍵盤翻頁共用）
  const go = useCallback((i) => {
    const el = sectionEls.current[Math.max(0, Math.min(TOTAL - 1, i))];
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  }, []);

  // 捲動時更新進度與目前章節
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const mid = window.scrollY + window.innerHeight / 2;
      let cur = 0;
      sectionEls.current.forEach((el, i) => {
        if (el && el.offsetTop <= mid) cur = i;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  // 鍵盤：↓/空白/PageDown 下一段；↑/PageUp 上一段；Home/End 首尾
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(active + 1); }
      else if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); go(active - 1); }
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  const beat = BEATS[active];

  // 點空白處 → 自動往下捲一段；點按鈕/連結/卡片則維持各自行為
  const onAppClick = (e) => {
    if (e.target.closest('button, a, input, textarea, select, [role="button"]')) return;
    if (window.getSelection && String(window.getSelection())) return; // 正在選取文字則不捲
    go(active + 1);
  };

  return (
    <div className="app" onClick={onAppClick}>
      {/* 固定 chrome */}
      <div className="topbar"><div className="fill" style={{ width: `${progress}%`, background: accentColor(beat.accent) }} /></div>
      <div className="chip" style={{ "--accent": accentColor(beat.accent) }}>
        <span className="dot" />{beat.label}
      </div>
      <div className="count"><b>{String(active + 1).padStart(2, "0")}</b> / {String(TOTAL).padStart(2, "0")}</div>
      {active === 0 && (
        <div className="scroll-cue"><span className="mouse" />往下捲動</div>
      )}

      {/* 手機版：回到最頂（捲動後出現） */}
      {progress > 6 && (
        <button className="to-top" onClick={() => go(0)} aria-label="回到最頂">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
          <span>最頂</span>
        </button>
      )}

      {/* 內容區塊 */}
      {BEATS.map((b, i) => {
        const Comp = b.Comp;
        // bare：自帶版面（如議程橫向卷軸），只包一層帶 ref 的容器供導覽定位
        if (b.bare) {
          return (
            <div key={i} ref={(el) => (sectionEls.current[i] = el)} className="bare" data-accent={b.accent}>
              <Comp go={go} starts={CHAPTER_START} />
            </div>
          );
        }
        return (
          <Section
            key={i}
            ref={(el) => (sectionEls.current[i] = el)}
            accent={b.accent}
            wide={b.orientation === "landscape"}
          >
            <Comp go={go} starts={CHAPTER_START} />
          </Section>
        );
      })}

      <Footer />
    </div>
  );
}

// accent key -> CSS 變數
function accentColor(key) {
  return { data: "var(--c-data)", genai: "var(--c-genai)", industry: "var(--c-industry)", brand: "var(--c-brand)" }[key] || "var(--c-brand)";
}
