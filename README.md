# Blue Trade AI

AI-powered growth systems for trade and home service businesses.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (3 Steps)

**Step 1: Push this project to a new GitHub repository**

```bash
git init
git add .
git commit -m "Initial Blue Trade AI website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bluetradeai.git
git push -u origin main
```

**Step 2: Connect to Vercel**

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Set environment variable: `NEXT_PUBLIC_SITE_URL` = `https://www.bluetradeai.com`
5. Click Deploy

**Step 3: Go Live**

- Vercel gives you a live URL instantly (e.g. `bluetradeai.vercel.app`)
- To connect your custom domain: go to Project Settings > Domains > Add Domain
- Follow Vercel's DNS instructions for your domain registrar

## After Launch Checklist

- [ ] Submit sitemap to Google Search Console: https://search.google.com/search-console
      Add property > enter site URL > submit sitemap at `/sitemap.xml`
- [ ] Create Google Business Profile: https://business.google.com
      Add business name, category (Marketing Agency / Advertising Agency),
      service area (United States), phone, website URL, description
- [ ] Verify site with Google Search Console via DNS TXT record (Vercel makes this easy)
- [ ] Set up Google Analytics 4 (add GA4 script to layout.tsx once ID is available)
- [ ] Replace placeholder phone number in JSON-LD schema with real number
- [ ] Replace social media hrefs with real profile URLs
