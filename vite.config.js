// 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
// 功能說明：Vite 設定（React 外掛 + 固定埠 + GitHub Pages base 路徑）
// 單一職責：只負責建置/開發伺服器設定
// 建立日期：2026-06-06  版本：v2.0（加入 Pages base）
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 專案站台路徑（= repo 名）。build 時套用，dev 維持根路徑
const REPO_BASE = "/COMPUTEX_Experience-Sharing/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? REPO_BASE : "/",
  plugins: [react()],
  server: {
    port: 5273, // COMPUTEX 諧音埠，避免與其他專案衝突
    strictPort: true, // 固定埠：被佔用就報錯，不自動跳號（搭配 start.bat 自動清埠）
    open: true, // 啟動後自動開瀏覽器
    host: true,
  },
}));
