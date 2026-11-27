import { Link } from 'react-router';
import { seoMeta, restaurantLd, SITE_URL } from '@/lib/seo';
import { BUSINESS, Breadcrumb, AshRule, VisitCard, WhatsApp, outlineClass, textLinkClass, ExternalLink } from '@/components/Restaurant';
import { MENU_ITEMS } from './Menu/menuData';

export function meta() {
  return seoMeta({
    title: 'Restaurant Information | P Cube Charcoal Foody Den, Old Bowenpally',
    ogTitle: 'Restaurant Information | P Cube Charcoal Foody Den',
    description: 'Address, opening hours, phone number, food categories and menu link for P Cube Charcoal Foody Den, Old Bowenpally, Secunderabad.',
    path: '/restaurant-information',
    breadcrumb: 'Restaurant information',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'P Cube Charcoal Foody Den restaurant information', url: `${SITE_URL}/restaurant-information`, about: { '@id': `${SITE_URL}/#restaurant` } }, restaurantLd],
  });
}

const CATEGORIES = ['Soups', 'Starters', 'Noodles', 'Fried Rice', 'Biryani'];
const count = name => MENU_ITEMS.filter(item => item.category === name).length;

export default function RestaurantInformation() {
  const facts = [
    ['Restaurant name', BUSINESS.name],
    ['Category', 'Restaurant (vegetarian and non-vegetarian)'],
    ['Address', BUSINESS.address],
    ['City and state', `${BUSINESS.locality}, ${BUSINESS.region}, India`],
    ['Telephone', <a key="t" href={BUSINESS.phoneHref} className={textLinkClass}>{BUSINESS.phone}</a>],
    ['Website', <a key="w" href={`${SITE_URL}/`} className={textLinkClass}>{SITE_URL.replace('https://', '')}</a>],
    ['Opening hours', `${BUSINESS.hours}, India Standard Time`],
    ['Food categories', CATEGORIES.map(name => `${name} (${count(name)})`).join(', ')],
    ['Directions', <ExternalLink key="d" href={BUSINESS.directions} className={textLinkClass}>Open in Google Maps</ExternalLink>],
  ];
  return <div className="mx-auto max-w-[1800px] px-4 py-12 md:px-8 xl:px-12 md:py-20">
    <Breadcrumb label="Restaurant information" />
    <header className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-warning">At a glance</p>
      <h1 className="font-heading text-4xl leading-tight md:text-6xl">Restaurant information</h1>
      <AshRule />
      <p className="text-lg leading-8 text-muted-foreground">P Cube Charcoal Foody Den is a restaurant in Sai Nagar, Indira Nagar, Old Bowenpally, Secunderabad. The menu covers soups, starters, noodles, fried rice and chicken biryani, with vegetarian and non-vegetarian options.</p>
    </header>
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
      <section aria-labelledby="facts-heading">
        <h2 id="facts-heading" className="font-heading text-2xl">Key details</h2>
        <dl className="mt-5 divide-y divide-border border-y border-border">{facts.map(([term, value]) => <div key={term} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"><dt className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{term}</dt><dd className="text-base leading-7">{value}</dd></div>)}</dl>
        <h2 className="mt-10 font-heading text-2xl">Delivery, takeaway, reservations and payments</h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">These services have not been confirmed on this website. Please call or message the restaurant to ask before you visit.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link to="/menu" className={outlineClass}>View the menu and prices</Link><Link to="/contact" className={outlineClass}>Contact and directions</Link><WhatsApp /></div>
      </section>
      <VisitCard />
    </div>
  </div>;
}
