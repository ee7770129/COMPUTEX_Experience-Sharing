// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：捲動區塊 — 每個節拍一段，捲入視窗時加上 is-in 觸發進場動畫；wide 為寬版橫向
// 單一職責：只負責「滿版區塊 + 進入視窗偵測」，內容由外部傳入
// 建立日期：2026-06-06  版本：v3.0（捲動式 scrollytelling）
import { forwardRef, useEffect, useRef, useState } from "react";

const Section = forwardRef(function Section({ wide, accent, children }, fwdRef) {
  const localRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = localRef.current;
    if (fwdRef) fwdRef(el); // 把 DOM 交給父層（供捲動定位）
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.22 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [fwdRef]);

  return (
    <section
      ref={localRef}
      data-accent={accent}
      className={`section ${wide ? "section--wide" : ""} ${inView ? "is-in" : ""}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
});

export default Section;
