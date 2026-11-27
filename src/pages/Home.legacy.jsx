// NOTE: no longer routed. The live home page is pages/Home.jsx (RestaurantHome). Kept for reference only.
import { Link } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import { BUSINESS, GrillPhoto, PhotoStudy, Reveal, SectionHeading, AshRule, VisitCard, WhatsApp, actionClass, outlineClass, textLinkClass } from '@/components/Restaurant';


const categories = [
  { label: 'Soups', icon: 'Soup', note: 'A warm beginning.' },
  { label: 'Kababs', icon: 'Flame', note: 'From the charcoal grill.' },
  { label: 'Starters', icon: 'UtensilsCrossed', note: 'Start with something to share.' },
  { label: 'Noodles', icon: 'Utensils', note: 'Find your favourite bowl.' },
];
const steps = [
  { icon: 'QrCode', title: 'Scan', detail: 'Scan the QR at your table.' },
  { icon: 'List', title: 'Choose', detail: 'Browse the menu and choose your dishes.' },
  { icon: 'ChefHat', title: 'Enjoy', detail: 'Your table order goes straight to the kitchen.' },
];
const questions = [
  ['What time do you open?', `Our opening hours are ${BUSINESS.hours}.`],
  ['Do you serve vegetarian food?', 'Yes. The menu includes vegetarian and non-vegetarian soups, kababs, starters and noodles.'],
  ['How does table QR ordering work?', 'Scan the QR at your table to browse and choose. Ask the team if you need help with your table order.'],
  ['Can I ask about delivery?', 'Message us on WhatsApp to confirm delivery availability before ordering.'],
  ['Is parking available?', 'Please call or message us to check parking arrangements before your visit.'],
  ['Where can I find you?', BUSINESS.address],
];

export default function Home() {
  return <>
    <section className="relative isolate min-h-[calc(100svh-8rem)] overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 -z-20"><GrillPhoto eager className="h-full w-full object-cover" /></div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/25" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/30" />
      <div className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col justify-end px-5 pb-10 pt-20 md:px-8 md:pb-16">
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-warning"><span className="h-px w-10 bg-warning" />Old Bowenpally · Secunderabad</p>
        <h1 className="max-w-4xl font-heading text-5xl leading-[1.06] tracking-tight sm:text-7xl lg:text-[6.7rem]">P Cube<br /><span className="italic">Charcoal</span><br />Foody Den.</h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-foreground/85 md:text-lg">Charcoal kababs, starters, soups and noodles, vegetarian and non-vegetarian, served fresh at your table.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/menu" className={actionClass}>Explore Menu<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link><Link to="/contact" className={outlineClass}>Find Us<ApperIcon name="MapPin" className="h-4 w-4" /></Link></div>
        <p className="mt-8 text-[10px] text-muted-foreground">Real photography from P Cube Charcoal Foody Den</p>
      </div>
    </section>
    <div className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-5 px-5 py-6 md:px-8">
        <span className="flex items-center gap-3 text-sm"><ApperIcon name="Clock3" className="h-5 w-5 text-primary" />{BUSINESS.hours}</span>
        <span className="flex items-center gap-3 text-sm"><span className="h-2 w-2 rounded-full bg-success" />Veg<span className="ml-2 h-2 w-2 rounded-full bg-destructive" />Non-Veg</span>
        <span className="flex items-center gap-3 text-sm text-muted-foreground md:ml-auto"><ApperIcon name="QrCode" className="h-5 w-5 text-primary" />Scan QR at your table to order</span>
      </div>
    </div>
    <div className="mx-auto max-w-7xl space-y-20 px-5 py-20 md:space-y-28 md:px-8 md:py-28">
      <Reveal className="grid items-center gap-10 lg:grid-cols-[.95fr_1fr] lg:gap-20">
        <PhotoStudy />
        <div><SectionHeading eyebrow="At our table" title="A little charcoal. A lot to choose from.">P Cube Charcoal Food Den brings charcoal kababs, starters, soups and noodles to Old Bowenpally. Choose vegetarian or non-vegetarian dishes, settle in, and explore the menu at your table.</SectionHeading><Link to="/about" className={`${textLinkClass} mt-6`}>Meet P Cube<ApperIcon name="ArrowUpRight" className="h-4 w-4" /></Link></div>
      </Reveal>
      <section>
        <Reveal><SectionHeading eyebrow="Four ways to begin" title="What we serve">From a warm soup to charcoal kababs, find the part of the menu you came for.</SectionHeading></Reveal>
        <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">{categories.map((category, index) => <Reveal key={category.label} delay={index * 0.06}><Link to={`/menu?category=${encodeURIComponent(category.label)}`} className="group flex h-full min-h-52 flex-col rounded-xl border border-primary/40 bg-card p-5 transition-[transform,border-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-1 hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transform-none md:p-7"><ApperIcon name={category.icon} className="h-7 w-7 text-primary" /><h3 className="mt-7 font-heading text-2xl">{category.label}</h3><AshRule className="my-4" /><p className="text-xs leading-6 text-muted-foreground">{category.note}</p><ApperIcon name="ArrowUpRight" className="mt-4 h-4 w-4 self-end text-primary" /></Link></Reveal>)}</div>
      </section>
      <Reveal className="rounded-2xl border border-border bg-card p-6 md:p-10">
        <SectionHeading eyebrow="At your table" title="Scan. Choose. Enjoy." />
        <div className="mt-8 grid gap-9 md:grid-cols-3">{steps.map((step, index) => <div key={step.title} className="flex gap-5"><span className="font-heading text-5xl text-primary/50">{index + 1}</span><div><ApperIcon name={step.icon} className="mb-4 h-6 w-6 text-primary" /><h3 className="font-heading text-2xl">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.detail}</p></div></div>)}</div>
      </Reveal>
      <section className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal><SectionHeading eyebrow="Before you visit" title="Good to know" /><div className="mt-7">{questions.map(([question, answer]) => <details key={question} className="group border-b border-border"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded py-4 text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{question}<ApperIcon name="Plus" className="h-4 w-4 shrink-0 transition-transform group-open:rotate-45" /></summary><p className="pb-6 pr-6 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div><WhatsApp className={`${textLinkClass} mt-6`}>Ask us on WhatsApp</WhatsApp></Reveal>
        <Reveal><VisitCard /></Reveal>
      </section>
    </div>
  </>;
}