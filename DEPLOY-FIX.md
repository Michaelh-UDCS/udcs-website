# Fix: universal-dynamic.com still showing Family Worship app

Your `npm run deploy` pushes to Firebase project **gen-lang-client-0976388753**.  
The domain **universal-dynamic.com** is almost certainly connected to a **different** Firebase project (the one where the Family Worship app was deployed). So we need to deploy **this** UDCS build to **that** project.

## Step 1: Find which project has the domain

1. Open [Firebase Console](https://console.firebase.google.com).
2. Check each project (switch via the project name at the top).
3. Go to **Build → Hosting** in each.
4. Find the project whose Hosting has **universal-dynamic.com** under **Custom domains**.

Note that project’s **Project ID** (e.g. `universal-dynamic-prod` or similar).

## Step 2: Deploy this repo to that project

In a terminal, in this folder:

```powershell
cd "g:\My Drive\UDCS Website"
firebase use <PROJECT_ID>
npm run deploy
```

Replace `<PROJECT_ID>` with the project ID you found (the one that has universal-dynamic.com).

Example: if the project is `universal-dynamic-12345`:

```powershell
firebase use universal-dynamic-12345
npm run deploy
```

That deploys the **UDCS consulting site** from this repo to the project that owns universal-dynamic.com, replacing the Family Worship app on that domain.

## Step 3: Confirm

After deploy finishes, wait a minute, then open **https://universal-dynamic.com** and hard refresh (Ctrl+Shift+R). You should see the UDCS consulting site.

---

**If the domain is in the same project but a different Hosting site:**  
Run `firebase hosting:sites:list` and note the **Site ID** that has the custom domain. Then we can add a deploy target so `npm run deploy` pushes to that site.
