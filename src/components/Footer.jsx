// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：頁尾 — 免責標語 + 版權 + 聯絡信箱
// 單一職責：只呈現頁尾
// 建立日期：2026-06-06  版本：v1.0
export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="foot-note">
        本簡報為個人 COMPUTEX 觀展心得整理，部分內容經現場即時翻譯擷取，
        <br className="foot-br" />僅供參考、不代表各廠商官方立場；圖片版權屬原廠商所有。
      </p>
      <div className="foot-meta mono">
        <span>© 2026 emoyilab.com</span>
        <a href="mailto:emoyilab@gmail.com" className="foot-mail">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
          </svg>
          emoyilab@gmail.com
        </a>
      </div>
      <style>{`
        .site-footer {
          width: 100%; padding: clamp(48px, 8vh, 90px) clamp(24px, 6vw, 150px) clamp(40px, 6vh, 70px);
          border-top: 1px solid var(--line);
          display: flex; flex-direction: column; align-items: center; gap: var(--s4);
          text-align: center; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.4));
        }
        .foot-note { font-size: var(--fs-small); color: var(--ink-mut); line-height: 1.7; max-width: 60ch; text-wrap: pretty; }
        .foot-meta { display: flex; align-items: center; gap: clamp(16px, 3vw, 40px); flex-wrap: wrap; justify-content: center; font-size: var(--fs-small); color: var(--ink-dim); }
        .foot-mail { display: inline-flex; align-items: center; gap: 8px; color: var(--ink-dim); text-decoration: none; transition: color 0.2s; }
        .foot-mail:hover { color: var(--accent, var(--c-brand)); }
        .foot-mail svg { color: var(--accent, var(--c-brand)); }
        @media (max-width: 520px) { .foot-br { display: none; } }
      `}</style>
    </footer>
  );
}
