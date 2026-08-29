# ARCHIVED / OUTDATED — Do Not Follow

> **STOP.** This document is historical only.  
> **Correct Firebase project (2026-08-29+):** `universal-dynamic-website`  
> **Correct account:** `michael@universal-dynamic.com` (UDCS business / Michaelh-UDCS)  
> **Do NOT** deploy to, switch to, or follow any guidance mentioning `gen-lang-client-0976388753` or other personal Gmail Firebase projects.  
> Deploy with: `npx firebase use` → confirm `universal-dynamic-website`, then `npm run deploy`.  
> CI: `.github/workflows/firebase-deploy.yml` (push to `master`).

---

## Historical notes (pre-fix context only)

Previously, `npm run deploy` could target Firebase project **gen-lang-client-0976388753**, while **universal-dynamic.com** was (or appeared to be) on a different Hosting project. The Domains/Hosting mix-up with a Family Worship app led to the steps below.

Those steps are **obsolete**. The consulting site now uses project ID **`universal-dynamic-website`** only. The `.firebaserc` `launch` alias to `gen-lang-client-*` has been removed.

### Old Step 1 (obsolete): Find which project has the domain

1. Open [Firebase Console](https://console.firebase.google.com).
2. Check each project (switch via the project name at the top).
3. Go to **Build → Hosting** in each.
4. Find the project whose Hosting has **universal-dynamic.com** under **Custom domains**.

*(Current answer: `universal-dynamic-website` under `michael@universal-dynamic.com`.)*

### Old Step 2 (obsolete): Deploy this repo to that project

```powershell
cd "C:\Users\micha\Desktop\UDCS Website"
firebase use universal-dynamic-website
npm run deploy
```

### Old Step 3 (obsolete): Confirm

After deploy, open **https://universal-dynamic.com** and hard refresh (Ctrl+Shift+R).
