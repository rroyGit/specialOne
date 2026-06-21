# My React App

A React app built with Vite, set up to deploy to GitHub Pages via the `gh-pages` package.

## Setup (run this locally — your machine needs internet access)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the dev server:**
   ```bash
   npm run dev
   ```
   Open the URL it prints (usually `http://localhost:5173`).

## Before deploying — update two things

1. In **`package.json`**, replace the `homepage` field with your actual GitHub username and repo name:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/my-react-app"
   ```

2. In **`vite.config.js`**, set `base` to match your repo name (must start and end with `/`):
   ```js
   base: '/my-react-app/',
   ```
   If your repo is named something else, e.g. `cool-site`, use `base: '/cool-site/'`.

   > Exception: if this repo is your special `YOUR_USERNAME.github.io` repo (hosted at the root, not a sub-path), set `base: '/'` instead.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-react-app.git
git push -u origin main
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` (via `predeploy`), then pushes the contents of `dist/` to a `gh-pages` branch on your repo.

## Final step — enable Pages in GitHub

1. Go to your repo on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Select branch **`gh-pages`** and folder **`/ (root)`**.
4. Save. After a minute or two, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/my-react-app/
   ```

## Re-deploying after changes

Anytime you update your app, just run:
```bash
npm run deploy
```
This rebuilds and republishes automatically.

## Note on routing

This template doesn't include React Router. If you add it later and use `BrowserRouter`,
direct links to sub-routes (e.g. refreshing on `/about`) will 404 on GitHub Pages, since
GitHub Pages can't do server-side routing. Use `HashRouter` instead, or set `basename`
on `BrowserRouter` plus a 404.html redirect trick.
