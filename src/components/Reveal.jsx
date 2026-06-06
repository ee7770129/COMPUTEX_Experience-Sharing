// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：逐項揭露容器 — 依序號 i 套用進場延遲，讓元素一個個浮現
// 單一職責：只負責「延遲進場」的包裝，不含內容
// 建立日期：2026-06-06  版本：v1.0
export default function Reveal({ i = 0, as: Tag = "div", className = "", style, children, ...rest }) {
  const delay = `${0.12 + i * 0.1}s`;
  return (
    <Tag className={`r ${className}`} style={{ animationDelay: delay, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
