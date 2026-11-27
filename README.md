# P Cube Charcoal Foody Den — Website

Official website of **P Cube Charcoal Foody Den**, a restaurant in Old Bowenpally, Secunderabad, Telangana, India.
Live site: https://p-cube-charcoal.vercel.app/

- **Address:** FFPR+6PW, Dairy Farm Rd, Sai Nagar, Indira Nagar, Old Bowenpally, Secunderabad, Telangana 500015
- **Phone / WhatsApp:** +91 9705380806
- **Hours:** 1:30 PM – 11:30 PM, every day (IST)

## Tech stack
- React 19 + React Router 7 (framework mode, static prerendering / SSG, `ssr: false`)
- Vite 8, Tailwind CSS 4, shadcn/ui (Radix), Framer Motion, Lucide icons
- Hosted on Vercel as a static site (`build/client`)

## Getting started
```bash
npm ci            # install dependencies
npm run dev       # local dev server
npm run build     # production build + 404.html (scripts/postbuild.mjs)
npm run preview   # serve the built site (scripts/serve-static.mjs)
```
Requires Node.js 20 or newer.

## Pages (all prerendered to static HTML)
| Route | File |
| --- | --- |
| `/` | `src/pages/Home.jsx` |
| `/menu` | `src/pages/Menu/Menu.jsx` (data: `menuData.js`) |
| `/about` | `src/pages/About.jsx` |
| `/gallery` | `src/pages/Gallery.jsx` |
| `/reviews` | `src/pages/Reviews.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `/restaurant-information` | `src/pages/RestaurantInformation.jsx` |

Routes live in `src/routes.js`; the prerender list is in `react-router.config.js`. **When you add a page, update both, plus `public/sitemap.xml` and `public/llms.txt`.**

## Project structure
```
public/                  static files served from the site root
  favicon.ico, favicon-32.png, icon-192.png, icon-512.png, apple-touch-icon.png
  opengraph-image.jpg, twitter-image.jpg   (1200x630 social preview cards)
  site.webmanifest, robots.txt, sitemap.xml, llms.txt
  images/                logo + hero image
src/
  assets/menu/           dish photos (file name = slug of the dish name)
  assets/gallery/        gallery photos: category--title.jpg
  assets/about/          About / "At our table" photo
  components/            shared UI (Restaurant.jsx, Reviews.jsx, ...)
  config/business.js     single source of truth for name, address, phone, hours
  data/reviews.js        customer reviews
  lib/seo.js             meta tags, canonical URLs, JSON-LD
  lib/photos.js          gallery ordering and home preview
  pages/                 route components
```

## Common edits
- **Business details:** edit `src/config/business.js` (used by the UI, SEO tags and structured data). Keep `public/llms.txt` in step.
- **Menu:** edit `src/pages/Menu/menuData.js`. A dish photo is matched by file name: the dish name lower-cased with non-letters turned into hyphens, e.g. "Chicken Hakka Noodles" → `src/assets/menu/chicken-hakka-noodles.jpg`. **If you rename a dish, rename its image file too.** After any price change, update the menu section of `public/llms.txt`.
- **Gallery:** add `category--title-in-words.jpg` to `src/assets/gallery/`. Categories show in this order: Food, Customer, Interior, Restaurant (`GALLERY_CATEGORY_ORDER` in `src/lib/photos.js`). The three photos on the home page are set by `HOME_GALLERY_TITLES` in the same file.
- **Reviews:** add real customer reviews to `src/data/reviews.js`. Never publish invented reviews or ratings.
- **Google review button:** the URL is `GOOGLE_WRITE_REVIEW_URL` in `src/data/reviews.js`.
- **Domain change:** update `SITE_URL` in `src/lib/seo.js`, then `public/sitemap.xml`, `public/robots.txt` and `public/llms.txt`.

## SEO and AI discoverability
- Every route is prerendered, so content is in the HTML without JavaScript.
- `public/robots.txt` allows all crawlers, including search and AI bots, and links the sitemap.
- `public/llms.txt` is a detailed, plain-text summary of the restaurant for AI models.
- Pages carry unique titles, descriptions, canonical URLs, Open Graph / Twitter tags and schema.org JSON-LD (Restaurant, Menu, WebSite, BreadcrumbList and more).
- If Vercel's Bot Protection or Attack Challenge Mode is on, it can still block AI bots; turn it off in the Vercel dashboard if you want them to crawl.

## Deployment
Vercel settings are in `vercel.json` (build command `npm run build`, output `build/client`). Push to `main` to deploy.

## Notes
- The site is dark theme only.
- `OWNER_CONFIRMATIONS.md` lists business facts the owner should double-check; `VERIFICATION.md` records what has and has not been tested.
