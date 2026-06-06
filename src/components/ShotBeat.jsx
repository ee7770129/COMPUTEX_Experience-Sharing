// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：標準內容版型（全寬）— 左文字／右照片並排填滿，口白橫跨底部；mediaBig 時照片更大
// 單一職責：只負責此版型排列，內容由呼叫端傳入
// 建立日期：2026-06-06  版本：v3.0（全寬並排）
import Reveal from "./Reveal.jsx";
import Shot from "./Shot.jsx";
import VO from "./VO.jsx";

export default function ShotBeat({ eyebrow, title, lead, children, shot, vo, mediaBig }) {
  return (
    <div className={`sb ${mediaBig ? "sb-big" : ""}`}>
      <div className="sb-grid">
        <div className="sb-text col gap-3">
          {eyebrow && <Reveal i={0} className="eyebrow">{eyebrow}</Reveal>}
          {title && <Reveal i={1} as="h2" className="h2">{title}</Reveal>}
          {lead && <Reveal i={2} className="lead">{lead}</Reveal>}
          {children}
        </div>
        {shot && <Reveal i={2} className="sb-media"><Shot {...shot} /></Reveal>}
      </div>
      {vo && <VO i={4}>{vo}</VO>}
      <style>{`
        .sb { display: flex; flex-direction: column; gap: clamp(28px, 4vh, 56px); width: 100%; }
        .sb-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: clamp(40px, 5vw, 96px); align-items: center; }
        .sb-big .sb-grid { grid-template-columns: 0.8fr 1.4fr; }
        .sb-media .shot { width: 100%; aspect-ratio: 16/9; }
        @media (max-width: 900px) { .sb-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
