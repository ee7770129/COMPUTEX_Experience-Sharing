// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：Vite 設定（React 外掛 + 自動開瀏覽器 + 固定埠）
// 單一職責：只負責建置/開發伺服器設定
// 建立日期：2026-06-06  版本：v1.0
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5273, // COMPUTEX 諧音埠，避免與其他專案衝突
    strictPort: true, // 固定埠：被佔用就報錯，不自動跳號（搭配 start.bat 自動清埠）
    open: true, // 啟動後自動開瀏覽器
    host: true,
  },
});
