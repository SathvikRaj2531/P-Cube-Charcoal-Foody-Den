# P Cube — Charcoal & Ember

## Scope

This implementation targets the supplied standalone React platform specification:
Home, Menu, About and Contact.

The supplied specification defines no domain tables, authenticated profiles,
QR endpoints, staff pages or administrative workflows.

No repository, README, PROGRESS document, Express application, SQLite database,
API implementation or DOCX was accessible in this generation environment.
Existing server-rendered architecture and workflows could not be inspected,
modified or verified. This implementation must not be represented as an
in-place redesign of that unavailable application.

## Identity

- Heading: Playfair Display, restrained italic emphasis.
- Body: Inter.
- Light background: cream #FBF6EE.
- Dark background: charcoal #15100D.
- Primary light action: ember #B83A0A.
- Dark primary: lifted ember #ED784B for contrast.
- Sand surfaces, warm borders, saffron utility text.
- All presentation colors resolve through theme tokens.

The signature is a fine ember rule with a subtle blurred midpoint.
Category cards lift 4px and brighten their ember border over 180ms.
Reduced-motion preferences disable translations and reveal animation.

## Composition

Oversized editorial name anchors the grill hero.
Quiet asymmetric reading sections follow the dominant first impression.
Navigation remains sticky; mobile destinations form a scrollable strip.
Footer separates Brand, Visit, Contact and Explore.
Contact uses a typographic address panel, not a fabricated map.

## Photography

One genuine Unsplash-hosted stock grill photograph is used:
https://images.unsplash.com/photo-1555939594-58d7cb561ad1

It is not assigned to an individual menu dish.

Before commercial publication:
1. Confirm source attribution, applicable license and provenance.
2. Download an approved original and serve responsive local derivatives.
3. Check crops at 360, 390, 768, 1024 and 1440px.
4. Replace stock imagery with approved restaurant photography when available.

Do not publish invented restaurant interiors or synthetic food.
Do not assign photographs to dishes without verifying correspondence.
Failed image loads remove the image rather than display a broken placeholder.
Hero uses responsive sources, explicit dimensions and high fetch priority.
Other photography loads lazily.

No six-image gallery or restaurant-photo gallery was fabricated.

## Menu source and publication blocker

The attached material consists of three rendered menu images, not a DOCX.
The visible rows total:
- Soups: 14 — 9 vegetarian, 5 non-vegetarian.
- Kababs: 9 — 4 vegetarian, 5 non-vegetarian.
- Starters: 18 — 10 vegetarian, 8 non-vegetarian.
- Noodles: 22 — 10 vegetarian, 12 non-vegetarian.
- Total visible rows: 63.

These category counts differ from the prose specification.
They are an inspection of the supplied images, not a DOCX verification.

The platform requires every dish record to come through the SDK, but the
provided specification defines no menu table. No schema or hardcoded record
list was invented. Menu currently exposes its designed filter interface and
an explicit publication-unavailable state; it does not claim to show 63 dishes.

To complete publication, supply the canonical document and an approved menu
schema with exact category, diet, portion and price declarations.

Category counts, real search results, price cards and dish sharing must be
connected to that approved data source before menu acceptance testing.

## Factual safeguards

Business address, phone, hours and social URLs use the supplied facts.
No ratings, testimonials, awards, restaurant history or email address added.
Delivery and parking questions direct guests to the restaurant.
Opening status uses Asia/Kolkata, updates each minute and reflects supplied
hours only, not exceptional closures.
Today's Specials is omitted because no specials schema or data exists.

## Accessibility

- Router-based internal links.
- Visible keyboard focus.
- Skip-to-content link.
- Native keyboard-accessible FAQ disclosure.
- Labelled menu controls and pressed states.
- Minimum 44px interactive targets.
- Reduced-motion support.
- Photo lightbox uses the platform dialog primitive.
- Contact sticky action reserves space and respects mobile safe-area inset.

## Validation status

No execution, browser testing, API testing, image-license verification,
performance measurement or backend workflow verification was performed in
this environment.

Required release checks:
- Build and route smoke tests.
- Keyboard and screen-reader navigation.
- Both light and dark themes.
- Widths 360, 390, 768, 1024 and 1440px.
- All external social, WhatsApp, telephone and directions links.
- Menu import reconciliation against the canonical document.
- QR ordering, staff acceptance, kitchen progression and billing in the
  existing application once its source is available.
- Mobile LCP below 2.5 seconds and CLS below 0.1 measured on deployment.

Protected bootstrap, router, authentication and system 404 files were not
changed. Existing metadata, sitemap, robots and llms files were not available
for inspection and were not overwritten.