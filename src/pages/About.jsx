import { Link } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import { seoMeta, SITE_URL } from '@/lib/seo';
import { BUSINESS, Breadcrumb, SectionHeading, PhotoStudy, Reveal, VisitCard, AshRule, WhatsApp, outlineClass } from '@/components/Restaurant';

export function meta() {
  return seoMeta({
    title: 'About P Cube Charcoal Foody Den | Our Restaurant in Secunderabad',
    ogTitle: 'About P Cube Charcoal Foody Den',
    description: 'Learn about P Cube Charcoal Foody Den in Old Bowenpally, Secunderabad: soups, starters, noodles, fried rice and chicken biryani, vegetarian and non-vegetarian.',
    path: '/about',
    breadcrumb: 'About',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About P Cube Charcoal Foody Den', url: `${SITE_URL}/about`, about: { '@id': `${SITE_URL}/#restaurant` } }],
  });
}

const features = [
  { icon: 'UtensilsCrossed', title: 'Soups & starters', text: 'Begin with a vegetarian or non-vegetarian soup, then choose a starter to share, in single or full portions.' },
  { icon: 'Utensils', title: 'Noodles & fried rice', text: 'Hakka, Hong Kong, Singapore, Szechuan and more, in single and full portions.' },
  { icon: 'CookingPot', title: 'Biryani', text: 'Chicken biryani in half plates, with extra rice and extra pieces available.' },
  { icon: 'Leaf', title: 'Room for both', text: 'Vegetarian and non-vegetarian dishes sit across the menu. Ask the team about ingredients and dietary needs.' },
];

export default function About() {
  return <div className="mx-auto max-w-[1800px] px-4 py-12 md:px-8 xl:px-12 md:py-20">
    <Breadcrumb label="About" />
    <header className="max-w-4xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-warning">Our place at your table</p><h1 className="font-heading text-4xl leading-tight md:text-6xl">About P Cube<br /><span className="italic">Charcoal Foody Den.</span></h1><AshRule /></header>
    <Reveal className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div><h2 className="font-heading text-3xl leading-tight md:text-4xl">Starters to biryani.<br />Secunderabad, at the table.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Find P Cube Charcoal Foody Den in Sai Nagar, Indira Nagar, Old Bowenpally. Our menu brings together starters, soups, noodles, fried rice and biryani, with vegetarian and non-vegetarian options.</p><p className="mt-5 text-lg leading-8 text-muted-foreground">Browse the menu before your visit. For questions about dishes, ingredients or your visit, contact us directly on WhatsApp.</p><div className="mt-8 flex flex-wrap gap-3"><WhatsApp /><Link to="/menu" className={outlineClass}>Explore Menu</Link><Link to="/gallery" className={outlineClass}>See the Gallery</Link><Link to="/contact" className={outlineClass}>Contact &amp; Directions</Link></div></div>
      <PhotoStudy />
    </Reveal>
    <section className="my-20"><SectionHeading eyebrow="On the menu" title="Something for your table" /><div className="mt-9 grid gap-x-10 gap-y-6 sm:grid-cols-2">{features.map((feature, index) => <Reveal key={feature.title} delay={index * 0.06} className="border-b border-border py-7"><ApperIcon name={feature.icon} className="h-7 w-7 text-primary" /><h3 className="mt-5 font-heading text-2xl">{feature.title}</h3><p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">{feature.text}</p></Reveal>)}</div></section>
    <Reveal className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]"><div><SectionHeading eyebrow="Make a visit" title={BUSINESS.hours}>Find us in Old Bowenpally, Secunderabad. Call or message us if you need help planning your visit.</SectionHeading></div><VisitCard /></Reveal>
  </div>;
}