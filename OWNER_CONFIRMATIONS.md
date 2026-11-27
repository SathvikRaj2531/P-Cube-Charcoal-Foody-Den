# Items requiring owner confirmation

Flags live in `src/config/business.js`. Change them only after the owner confirms.

## A. Images (`PHOTOS_CONFIRMED = true`)
The owner has confirmed that all supplied images (gallery, About, hero, 77 dish photos) are genuine photographs of the restaurant and its dishes. Captions and alt text describe them as real photographs, and the Restaurant JSON-LD includes `image`.

## B. Social profiles (`SOCIAL_VERIFIED = false`)
While false, Instagram/Facebook links are hidden on Contact and in the footer, and `sameAs` is omitted from JSON-LD.
- [ ] Instagram `https://www.instagram.com/sathvik_rajpvt/` (looks personal) - official restaurant account?
- [ ] Facebook `https://www.facebook.com/profile.php?id=61590831953756` - official restaurant page?

## C. Business facts (currently match the project brief; please confirm)
- [ ] Address: FFPR+6PW, Dairy Farm Rd, Sai Nagar, Indira Nagar, Old Bowenpally, Secunderabad, Telangana 500015
- [ ] Phone / WhatsApp: +91 9705380806
- [ ] Hours: 1:30 PM - 11:30 PM, every day of the week (JSON-LD lists all 7 days)
- [ ] Map coordinates 17.4856035, 78.4918059 (taken from the existing embed)

## D. Services (not stated anywhere on the site; deliberately unpublished)
- [ ] Delivery  - [ ] Takeaway  - [ ] Reservations  - [ ] Payment methods  - [ ] Parking
(The Home FAQ currently tells visitors to ask by WhatsApp/phone for delivery and parking.)

## E. Food and menu
- [ ] "Charcoal" cooking: removed the "charcoal-grilled" tagline (footer, About heading, config). The name is unchanged. Is food actually cooked over charcoal? If yes, supply wording.
- [ ] `servesCuisine` is Indo-Chinese + Indian (derived from menu). Add anything else only if true.
- [ ] Prices for all 77 dishes vs the printed menu (source docx `P_Cube_Charcoal_Foody_Den_Menu_Master.docx` was not in the zip).
- [x] Chicken Biryani is sold as a half plate only (₹130); no full-plate option or "to confirm" wording is shown.
- [ ] Veg / non-veg tags, and diet for "Extra Piece/Rice - Biryani" (currently none).
- [ ] Category counts differ from DESIGN.md's older notes (Kababs, 63 rows). Confirm the current five categories are right.
- [ ] Items marked "(Must Try)" - owner's wording, kept as-is.

## F. Other
- [ ] Site owner name / Google Business Profile: check it matches the NAP above.
- [ ] Confirm `https://p-cube-charcoal.vercel.app` stays the canonical domain (if a custom domain is added, update `SITE_URL` in `src/lib/seo.js`, `sitemap.xml`, `robots.txt`, `llms.txt`).
