<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Universal Dynamic Consulting Services LLC (UDCS) Website

Official web application for **Universal Dynamic Consulting Services LLC**.

---

## 🌐 Live Website URLs
- **Primary Domain**: [https://universal-dynamic.com](https://universal-dynamic.com)
- **Firebase Subdomain**: [https://universal-dynamic-website.web.app](https://universal-dynamic-website.web.app)

---

## ☁️ Hosting & Account Information
- **Hosting Provider**: Google Firebase Hosting
- **Account Owner**: `michael@universal-dynamic.com` (Google Workspace Account)
- **Firebase Project ID**: `universal-dynamic-website`
- **Firebase Project Number**: `879702190148`
- **Domain Registrar**: Namecheap (`universal-dynamic.com`)
- **Console Link**: [Firebase Console - universal-dynamic-website](https://console.firebase.google.com/project/universal-dynamic-website/overview)

---

## 🚀 Quick Deployment & Build

### Option A: Standard Build & Deploy
```powershell
# Make sure you are logged in to the business account
npx firebase login

# Deploy hosting
npx firebase deploy
```

### Option B: Build via Temp (Bypasses Google Drive sync locks)
```powershell
powershell -Command "robocopy 'g:\My Drive\UDCS Website' '$env:TEMP\udcs-build' /MIR /XD node_modules dist .git .firebase; Set-Location '$env:TEMP\udcs-build'; npm install; npx vite build; robocopy '$env:TEMP\udcs-build\dist' 'g:\My Drive\UDCS Website\dist' /MIR"

npx firebase deploy
```

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
