# AshutoshPortfolio — Local Run, GitHub & Vercel

## 1. Run locally in VS Code
1. Extract/open the `AshutoshPortfolio` folder in VS Code.
2. Install the VS Code extension **Live Server** (Ritwick Dey) if you want a one-click preview.
3. Right-click `index.html` → **Open with Live Server**.
4. Alternatively, from the project folder run:
   - `python3 -m http.server 5500`
   - Open `http://localhost:5500`
5. Check the page at desktop and mobile widths. Click **Skip Intro**, test section navigation, resume download, and project links.
6. Open browser DevTools → Console and check for errors.

## 2. Assets to add
See `ASSETS-TO-ADD.txt`. Your portrait, uploaded resume PDF, and intro video are included. The separate Nexora logo was not supplied; add it as `assets/images/nexora-logo.jpg` if needed. The intro overlay autoplays muted where browser policy allows; visitors can skip it, and if autoplay is blocked the video controls become available.

## 3. Push to GitHub
Create an empty repository named `AshutoshPortfolio` in your GitHub account. Then open Terminal in VS Code at this folder and run:

```bash
git init
git add .
git commit -m "Build Ashutosh cinematic portfolio"
git branch -M main
git remote add origin https://github.com/ashudubeyvns/AshutoshPortfolio.git
git push -u origin main
```

If `origin` already exists, run `git remote -v`; update it with:
`git remote set-url origin https://github.com/ashudubeyvns/AshutoshPortfolio.git`

## 4. Deploy to Vercel
1. Sign in at https://vercel.com/ using your GitHub account.
2. Add New → Project → import `AshutoshPortfolio`.
3. Framework preset: **Other** (static HTML).
4. Build command: leave empty; output directory: `.` (project root).
5. Deploy. After successful deployment, Vercel will provide a URL.
6. Each push to the connected `main` branch can trigger a redeployment.

## 5. Important notes
- This is a static HTML/CSS/JS site; no Node/npm build is required.
- External CDN assets (Tailwind CDN, Google Fonts, Font Awesome) need internet access.
- The contribution snake workflow is stored in `profile-readme-setup/snake.yml` as a reference. Copy it to `.github/workflows/snake.yml` in your special GitHub profile repository (`ashudubeyvns/ashudubeyvns`) if you want the profile README snake to update there; do not run it from this portfolio repo.
- Check all academic numbers and links before public release.
