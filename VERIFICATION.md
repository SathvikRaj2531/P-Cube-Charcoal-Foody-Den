# Verification status

## Verified offline (script: run `node` checks described in the delivery notes)
- All `src/**/*.js(x)` parse without syntax errors (TypeScript transpiler diagnostics).
- Route table, prerender list and sitemap all contain the six routes `/`, `/menu`, `/about`, `/gallery`, `/contact`, `/restaurant-information` (+ `/404` prerender).
- Each page's `path` (canonical) matches its route; titles are unique.
- Menu JSON-LD built from real code: 5 MenuSections, 77 MenuItems, 134 numeric INR Offers, no empty offers. BreadcrumbList built correctly. Restaurant JSON-LD has no `sameAs` or `image` while flags are false.
- All internal links resolve to real routes; referenced public assets exist.
- Gallery: 4 unique images (md5), ASCII filenames only.
- sitemap.xml is well-formed XML; llms.txt URLs match sitemap routes.

## NOT verified (needs network / a browser)
`npm ci`, `npm run build`, generated HTML inspection, JS-disabled test, Rich Results Test, Lighthouse, console errors, responsive layouts, Vercel deployment, Search Console / Bing indexing.

## Update 2026-11-19 (this change set)
Added: /reviews page + nav link, Reviews + Google Map block on Home (after gallery), expanded "At our table", Home gallery limited to Interior/Restaurant, dark-only theme (toggle removed), AI-crawler-friendly robots.txt, sitemap with /reviews, llms.txt update.
Verified: all src files parse (TypeScript transpile, 0 errors); sitemap.xml well-formed; robots.txt has no Disallow rules.
NOT verified: `npm ci` / `npm run build` could not run (no package-registry access in the authoring environment), so rendered HTML, layout and console output are untested. Run `npm ci && npm run build` before deploying.
Reviews: src/data/reviews.js is intentionally empty; add only real customer reviews.

## Update 2 (2026-11-19)
Hero now fills exactly one viewport (min-h calc(100svh-5rem)); mobile/tablet nav replaced by a circular hamburger dropdown (<1024px); footer phone/WhatsApp links stacked to stop overlap. Files parse (0 errors). Not browser-tested / not built (no registry access).

## Update 3 (2026-11-19)
Real P Cube logo replaces the flame icon (header, footer, favicon, apple-touch-icon, JSON-LD logo). Brand subtitle larger/bolder. Hero + header use a wider container with larger type; nav text enlarged. Files parse; not built or browser-tested (no registry access).

## Update 4 (2026-11-19)
Body text scaled up one Tailwind step outside the navbar/hero; content containers widened (max-w 1800px, smaller side padding). Four owner-supplied customer reviews added (src/data/reviews.js, no author names, no review schema emitted). "Rate on Google" hero button added (opens the Google Maps listing). Files parse; not built/browser-tested.

## Update 5 (2026-11-20)
Gallery order Food > Customer > Interior > Restaurant; home preview = Charcoal Starter Platter, The Biryani Handi, The Famous Monkey Corner. Icons, social cards, site.webmanifest, README.md, rewritten llms.txt. Menu spelling: "Chicken Malaysia Noodles" -> "Chicken Malaysian Noodles" (image renamed byte-identical). Checked: all 77 dishes map to an image file and vice versa. Not built / not browser-tested (no registry access).
