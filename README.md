# Blooket Quality-of-Life Bookmarklet Menu

This project provides a **safe, non-cheating bookmarklet** menu for `blooket.com` with convenience controls:

- Text size controls (A+ / A-)
- Dark mode toggle (local visual inversion)
- Sidebar hide/show toggle (best-effort selectors)
- Quick navigation buttons (Dashboard, Discover Sets, Homework)

## Install

1. Open `bookmarklet-menu.js`.
2. Copy the entire line (it starts with `javascript:(()=>{...`).
3. Create a new browser bookmark.
4. Paste that line into the bookmark URL/location field.
5. While on `https://www.blooket.com`, click the bookmark.

Clicking the bookmark again closes the menu.

## Notes

- This script is intentionally local-only and does not modify game scores, answers, or account data.
- Some page layouts may use different class names; sidebar toggling is best effort.
