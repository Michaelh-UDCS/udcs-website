# Google Search Console — Request Indexing (P0)

**Account:** GSC property for `https://universal-dynamic.com`  
**Goal:** Clear `site:universal-dynamic.com` empty results by requesting crawl of priority URLs.

## 5-step checklist

1. Open [Google Search Console](https://search.google.com/search-console) and select the Universal Dynamic property (URL-prefix or domain).
2. Use the **URL Inspection** bar at the top; paste one priority URL (see list below).
3. Wait for inspection to finish. If the page is not on Google (or is stale), click **Request indexing**.
4. Repeat for each remaining priority URL. Stay within daily request limits — space requests if GSC rate-limits you.
5. Recheck in a few days with `site:universal-dynamic.com` and URL Inspection status. Do not re-request the same URL repeatedly the same day.

## Priority URLs (request in this order)

| Priority | URL |
| :--- | :--- |
| 1 | `https://universal-dynamic.com/` |
| 2 | `https://universal-dynamic.com/services/lake-jackson-tx` |
| 3 | `https://universal-dynamic.com/about` |
| 4 | `https://universal-dynamic.com/contact` |

## Notes

- Sitemap should already be submitted (`https://universal-dynamic.com/sitemap.xml`); Request Indexing accelerates key pages.
- Off-page listings (GBP, Apple, Bing, etc.) still help entity discovery — see `SEO_CLIENT_CHECKLIST.md`.
