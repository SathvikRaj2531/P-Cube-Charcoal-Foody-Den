import { Link } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import { GOOGLE_WRITE_REVIEW_URL } from '@/data/reviews';
import { MENU_ITEMS } from '@/pages/Menu/menuData';
import { BUSINESS, ExternalLink, PhotoStudy, Reveal, SectionHeading, AshRule, VisitCard, WhatsApp, actionClass, outlineClass, textLinkClass } from '@/components/Restaurant';

const categories = [
  { label: 'Soups', icon: 'Soup', note: 'A warm beginning.' },
  { label: 'Starters', icon: 'UtensilsCrossed', note: 'Start with something to share.' },
  { label: 'Noodles', icon: 'Utensils', note: 'Find your favourite bowl.' },
  { label: 'Fried Rice', icon: 'Wheat', note: 'Single or full plates.' },
  { label: 'Biryani', icon: 'CookingPot', note: 'Half or full plates.' },
];
const questions = [
  ['What time do you open?', `Our opening hours are ${BUSINESS.hours}.`],
  ['Do you serve vegetarian food?', 'Yes. The menu includes vegetarian and non-vegetarian soups, starters, noodles and fried rice, along with chicken biryani.'],
  ['Can I ask about delivery?', 'Message us on WhatsApp to confirm delivery availability before ordering.'],
  ['Is parking available?', 'Please call or message us to check parking arrangements before your visit.'],
  ['Where can I find you?', BUSINESS.address],
];

const VEG_COUNT = MENU_ITEMS.filter(item => item.diet === 'Veg').length;
const NONVEG_COUNT = MENU_ITEMS.filter(item => item.diet === 'Non-Veg').length;
const MUST_TRY = MENU_ITEMS.filter(item => /must try/i.test(item.name)).map(item => item.name.replace(/\s*\(Must Try\)/i, ''));
const tableFacts = [
  { icon: 'UtensilsCrossed', value: `${MENU_ITEMS.length} dishes`, label: 'Across five menu sections' },
  { icon: 'Leaf', value: `${VEG_COUNT} veg · ${NONVEG_COUNT} non-veg`, label: 'Something for every table' },
  { icon: 'Clock3', value: BUSINESS.hours, label: 'Open every day, IST' },
];

export default function RestaurantHome() {
  return <>
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 -z-20"><img src="/images/hero-manchuria.jpg" alt="Manchurian served on a black plate at P Cube Charcoal Foody Den" width="735" height="490" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-[70%_center]" /></div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1800px] flex-col justify-end px-5 pb-12 pt-20 md:px-10 md:pb-20 xl:px-16">
        <p className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-warning md:text-base"><span className="h-px w-14 bg-warning" />Old Bowenpally · Secunderabad</p>
        <h1 className="max-w-none font-heading text-[clamp(3.25rem,10.5vw,7rem)] leading-[1.04] tracking-tight lg:text-[clamp(5rem,9.5vw,10.5rem)]">P Cube<br /><span className="italic">Charcoal</span><br />Foody Den.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/90 md:text-xl md:leading-9 lg:text-2xl lg:leading-10">Starters, soups, noodles, fried rice and biryani, vegetarian and non-vegetarian, served fresh at your table.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link to="/menu" className={`${actionClass} !min-h-14 !px-8 !text-base`}>Explore Menu<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link><Link to="/contact" className={`${outlineClass} !min-h-14 !px-8 !text-base`}>Find Us<ApperIcon name="MapPin" className="h-4 w-4" /></Link><ExternalLink href={GOOGLE_WRITE_REVIEW_URL} className={`${outlineClass} !min-h-14 !px-8 !text-base`}>Rate on Google<ApperIcon name="Star" className="h-4 w-4" /></ExternalLink></div>
      </div>
    </section>
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-[1800px] flex-wrap items-center gap-x-10 gap-y-5 px-4 py-6 md:px-8 xl:px-12">
        <span className="flex items-center gap-3 text-base"><ApperIcon name="Clock3" className="h-5 w-5 text-primary" />{BUSINESS.hours}</span>
        <span className="flex items-center gap-3 text-base md:ml-auto"><span className="h-2 w-2 rounded-full bg-success" />Veg<span className="ml-2 h-2 w-2 rounded-full bg-destructive" />Non-Veg</span>
      </div>
    </div>
    <div className="mx-auto max-w-[1800px] space-y-20 px-4 py-20 md:space-y-28 md:px-8 xl:px-12 md:py-28">
      <Reveal className="grid items-center gap-10 lg:grid-cols-[.95fr_1fr] lg:gap-20">
        <PhotoStudy />
        <div>
          <SectionHeading eyebrow="At our table" title="A lot to choose from.">{BUSINESS.name} brings starters, soups, noodles, fried rice and biryani to Old Bowenpally. Choose vegetarian or non-vegetarian dishes, settle in, and explore the menu.</SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">Start with a warm soup or a plate of starters to share, then move on to noodles or fried rice. Noodles and fried rice come as single or full plates, and biryani as half or full plates, so you can order for one or for the whole table.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">{tableFacts.map(fact => <li key={fact.icon} className="rounded-xl border border-primary/40 bg-card p-4"><ApperIcon name={fact.icon} className="h-5 w-5 text-primary" /><p className="mt-3 font-heading text-xl leading-tight">{fact.value}</p><p className="mt-1 text-sm leading-5 text-muted-foreground">{fact.label}</p></li>)}</ul>
          {MUST_TRY.length > 0 && <div className="mt-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-warning">Marked “Must Try” on our menu</p><ul className="mt-3 flex flex-wrap gap-2">{MUST_TRY.map(name => <li key={name} className="rounded-full border border-border bg-card px-4 py-2 text-base">{name}</li>)}</ul></div>}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2"><Link to="/menu" className={actionClass}>View full menu<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link><Link to="/about" className={textLinkClass}>Meet P Cube<ApperIcon name="ArrowUpRight" className="h-4 w-4" /></Link></div>
        </div>
      </Reveal>
      <section>
        <Reveal><SectionHeading eyebrow="Five ways to begin" title="What we serve">From a warm soup to a hearty biryani, find the part of the menu you came for.</SectionHeading></Reveal>
        <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-5">{categories.map((category, index) => <Reveal key={category.label} delay={index * 0.06}><Link to={`/menu?category=${encodeURIComponent(category.label)}`} className="group flex h-full min-h-52 flex-col rounded-xl border border-primary/40 bg-card p-5 transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-1 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transform-none md:p-7"><ApperIcon name={category.icon} className="h-7 w-7 text-primary" /><h3 className="mt-7 font-heading text-2xl">{category.label}</h3><AshRule className="my-4" /><p className="text-sm leading-6 text-muted-foreground">{category.note}</p><ApperIcon name="ArrowUpRight" className="mt-4 h-4 w-4 self-end text-primary" /></Link></Reveal>)}</div>
      </section>
      <section className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal><SectionHeading eyebrow="Before you visit" title="Good to know" /><div className="mt-7">{questions.map(([question, answer]) => <details key={question} className="group border-b border-border"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded py-4 text-base font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{question}<ApperIcon name="Plus" className="h-4 w-4 shrink-0 transition-transform group-open:rotate-45" /></summary><p className="pb-6 pr-6 text-base leading-7 text-muted-foreground">{answer}</p></details>)}</div><WhatsApp className={`${textLinkClass} mt-6`}>Ask us on WhatsApp</WhatsApp></Reveal>
        <Reveal><VisitCard /></Reveal>
      </section>
    </div>
  </>;
}