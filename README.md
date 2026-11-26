# VI PortWatch — redesigned live tracker

A polished dark dashboard that mirrors the public progress-tracker concept while keeping the UI cleaner and mobile-friendly.

## Live updates
- Browser refreshes the dashboard every 3 minutes.
- `/api/tracker` fetches the upstream `tracker.json` server-side, avoiding browser CORS issues.
- The upstream site says its data feed is refreshed every 3 hours, so this dashboard will show the new data shortly after the source changes.

## Deploy
1. Put this folder in a GitHub repository.
2. Import the repository into Vercel.
3. Deploy with the default settings.
4. Open the Vercel URL.

No game files, keys, executables, or download links are included.

## Important
The source JSON structure may change. `public/index.html` contains a small normalizer that accepts common names such as `projects`, `entries`, `efforts`, `leaderboard`, `score`, `progress`, and `percentage`. If the upstream schema is different, update `normalize()` once.
