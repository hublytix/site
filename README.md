# Hublytix — Marketing Website

Production-ready marketing website for Hublytix (hublytix.ai). Built with Next.js 14, Tailwind CSS, and TypeScript.

## Pages

| Page | Path | Description |
|------|------|-------------|
| Landing Page | `/` | Hero, problem stats, features, how-it-works, pricing, testimonials, FAQ, CTA |
| Pricing | `/pricing` | Detailed pricing with 4 plans (Free, Starter, Pro, Agency) + FAQ |
| Blog | `/blog` | Blog index with upcoming posts + email subscribe |
| Terms | `/terms` | Terms of Service |
| Privacy | `/privacy` | Privacy Policy |
| 404 | auto | Custom 404 page |

## Quick Start (Local)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (Production)

### Option 1: One-click deploy
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Click "Deploy" — that's it

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Connect your domain
1. In Vercel Dashboard → Settings → Domains
2. Add `hublytix.ai`
3. Add the DNS records Vercel gives you to Cloudflare
4. Add `hublytix.app` as a redirect to `hublytix.ai`

## SEO Included

- Meta title + description on all pages
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- JSON-LD structured data (SoftwareApplication schema)
- sitemap.xml
- robots.txt
- Semantic HTML structure
- Canonical URLs via Next.js metadata

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Cabinet Grotesk (display) + DM Sans (body) + JetBrains Mono (code)
- **Hosting:** Vercel

## What's Next

After deploying this marketing site, use Claude Code with the CLAUDE.md file to build the authenticated app:
- HubSpot OAuth login
- Dashboard with health scores
- Audit check engine
- Stripe billing
- Background scan jobs

See the Hublytix Command Center (hublytix_command_center.html) for the complete build plan.

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata + JSON-LD
│   ├── page.tsx            # Landing page (all sections)
│   ├── not-found.tsx       # Custom 404
│   ├── globals.css         # Tailwind + custom styles + animations
│   ├── pricing/page.tsx    # Pricing page with 4 plans
│   ├── blog/page.tsx       # Blog index
│   ├── terms/page.tsx      # Terms of Service
│   └── privacy/page.tsx    # Privacy Policy
├── components/
│   ├── Navbar.tsx          # Responsive nav with mobile menu
│   └── Footer.tsx          # Footer with link columns
public/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```


