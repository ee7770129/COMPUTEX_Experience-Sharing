// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：現場照片框 — 裁切後的舞台照，含邊框、光暈、左下角來源標籤
// 單一職責：只負責「一張照片的呈現樣式」
// 建立日期：2026-06-06  版本：v1.0
export default function Shot({ src, caption, tag }) {
  return (
    <figure className="shot">
      <img src={src} alt={caption || "COMPUTEX 現場"} loading="lazy" />
      <div className="shot-glow" />
      {tag && <span className="shot-tag mono">{tag}</span>}
      {caption && <figcaption>{caption}</figcaption>}
      <style>{`
        .shot {
          position: relative; border-radius: var(--r-m); overflow: hidden;
          border: 1px solid var(--line);
          box-shadow: 0 30px 80px rgba(0,0,0,0.55),
                      0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent);
        }
        .shot img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .shot-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.5) 100%);
        }
        .shot-tag {
          position: absolute; top: 14px; left: 16px;
          font-size: 13px; letter-spacing: 0.08em;
          color: var(--ink-dim); background: rgba(0,0,0,0.45);
          padding: 4px 10px; border-radius: 6px; backdrop-filter: blur(4px);
          border: 1px solid var(--line);
        }
        .shot figcaption {
          position: absolute; bottom: 14px; left: 16px; right: 16px;
          font-size: var(--fs-small); color: var(--ink); text-shadow: 0 2px 8px #000;
        }
      `}</style>
    </figure>
  );
}
