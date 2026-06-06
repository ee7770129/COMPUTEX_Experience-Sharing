// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：React 進入點，掛載 App 與全域樣式
// 單一職責：只負責 bootstrap，不含任何業務邏輯
// 建立日期：2026-06-06  版本：v1.0
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/animations.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
