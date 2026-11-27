import { BUSINESS, SOCIAL_VERIFIED, PHOTOS_CONFIRMED } from '@/config/business';

export const SITE_URL = 'https://p-cube-charcoal.vercel.app';
export const OG_IMAGE = `${SITE_URL}/opengraph-image.jpg`;
export const TWITTER_IMAGE = `${SITE_URL}/twitter-image.jpg`;

const abs = path => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const restaurantLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_URL}/#restaurant`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/p-cube-logo-512.png`,
  ...(PHOTOS_CONFIRMED ? { image: OG_IMAGE } : {}),
  telephone: BUSINESS.phone,
  hasMenu: `${SITE_URL}/menu`,
  servesCuisine: ['Indo-Chinese', 'Indian'],
  ...(SOCIAL_VERIFIED ? { sameAs: [BUSINESS.instagram, BUSINESS.facebook] } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.latitude, longitude: BUSINESS.geo.longitude },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: BUSINESS.opens,
    closes: BUSINESS.closes,
  }],
};

export const breadcrumbLd = (label, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') },
    { '@type': 'ListItem', position: 2, name: label, item: abs(path) },
  ],
});

// Builds the React Router `meta` array for a page.
export function seoMeta({ title, description, path, ogTitle, jsonLd = [], image = OG_IMAGE, noindex = false, breadcrumb }) {
  const url = abs(path);
  const ld = breadcrumb ? [...jsonLd, breadcrumbLd(breadcrumb, path)] : jsonLd;
  return [
    { title },
    { name: 'description', content: description },
    ...(noindex ? [{ name: 'robots', content: 'noindex' }] : [{ tagName: 'link', rel: 'canonical', href: url }]),
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: BUSINESS.name },
    { property: 'og:title', content: ogTitle || title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:locale', content: 'en_IN' },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:alt', content: 'P Cube Charcoal Foody Den logo and storefront, restaurant in Old Bowenpally, Secunderabad' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: ogTitle || title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image === OG_IMAGE ? TWITTER_IMAGE : image },
    { name: 'twitter:image:alt', content: 'P Cube Charcoal Foody Den logo and storefront, restaurant in Old Bowenpally, Secunderabad' },
    ...ld.map(data => ({ 'script:ld+json': data })),
  ];
}
