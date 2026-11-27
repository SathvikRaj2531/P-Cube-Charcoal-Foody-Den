import { useState } from 'react';
import { useSearchParams } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import SitePhoto from '@/components/SitePhoto';
import { Badge } from '@/components/ui/badge';
import { MENU_ITEMS } from './menuData';
import { useHydrated } from '@/hooks/useHydrated';
import { seoMeta, SITE_URL } from '@/lib/seo';
import { AshRule, WhatsApp, outlineClass } from '@/components/Restaurant';


const CATEGORIES = ['All', 'Soups', 'Starters', 'Noodles', 'Fried Rice', 'Biryani'];
const DIETS = ['All', 'Veg', 'Non-Veg'];
export function meta() {
  const sections = CATEGORIES.slice(1).map(name => ({
    '@type': 'MenuSection',
    name,
    hasMenuItem: MENU_ITEMS.filter(item => item.category === name).map(item => ({
      '@type': 'MenuItem',
      name: item.name,
      offers: item.offers.map(o => ({ '@type': 'Offer', ...(o.label ? { name: `${o.label} portion` } : {}), price: o.price, priceCurrency: 'INR' })),
      ...(item.diet === 'Veg' ? { suitableForDiet: 'https://schema.org/VegetarianDiet' } : {}),
    })),
  }));
  return seoMeta({
    title: 'Food Menu & Prices | P Cube Charcoal Foody Den, Secunderabad',
    ogTitle: 'Food Menu & Prices | P Cube Charcoal Foody Den',
    description: `Food menu and prices at P Cube Charcoal Foody Den, Old Bowenpally, Secunderabad: ${CATEGORIES.slice(1).join(', ').toLowerCase()}, veg and non-veg.`,
    path: '/menu',
    breadcrumb: 'Menu',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'Menu', '@id': `${SITE_URL}/menu#menu`, inLanguage: 'en-IN', name: 'P Cube Charcoal Foody Den Menu', url: `${SITE_URL}/menu`, hasMenuSection: sections }],
  });
}

const dietStyles = { Veg: 'border-success/20 bg-success/10 text-success', 'Non-Veg': 'border-destructive/20 bg-destructive/10 text-destructive' };

export default function Menu() {
  const [params, setParams] = useSearchParams();
  const hydrated = useHydrated();
  // The prerendered page lists the whole menu; a ?category= deep link is applied after hydration so the first client render matches the static HTML.
  const category = hydrated && CATEGORIES.includes(params.get('category')) ? params.get('category') : 'All';
  const [search, setSearch] = useState('');
  const [diet, setDiet] = useState('All');
  const items = MENU_ITEMS.filter(item => (category === 'All' || item.category === category) && (diet === 'All' || item.diet === diet) && item.name.toLowerCase().includes(search.trim().toLowerCase()));
  function reset() {
    setParams({});
    setSearch('');
    setDiet('All');
  }
  return <div className="mx-auto min-h-[70vh] max-w-[1800px] px-4 py-12 md:px-8 xl:px-12 md:py-20">
    <header className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
      <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-warning">From the kitchen</p><h1 className="font-heading text-4xl md:text-6xl">Explore Our<br /><span className="italic">Food Menu</span></h1><p className="mt-5 text-base leading-7 text-muted-foreground">Vegetarian &amp; Non-Vegetarian · Dine-in</p></div>
      <WhatsApp>Ask about the menu</WhatsApp>
    </header>
    <AshRule className="my-10" />
    <section aria-label="Menu filters" className="space-y-5">
      <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Category">{CATEGORIES.map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => setParams(value === 'All' ? {} : { category: value })} className={`min-h-12 shrink-0 rounded-full border px-6 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${category === value ? 'border-primary bg-primary font-semibold text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:bg-accent'}`}>{value}</button>)}</div>
      <div className="grid items-end gap-5 md:grid-cols-[1fr_auto]">
        <div className="space-y-2"><label htmlFor="dish-search" className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Find a dish</label><div className="relative"><ApperIcon name="Search" className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-muted-foreground" /><input id="dish-search" type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search dish names" className="min-h-13 w-full rounded-xl border border-input bg-card py-4 pl-12 pr-4 text-base outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" /></div></div>
        <div className="flex min-h-13 gap-1 rounded-full border border-border bg-card p-1" role="group" aria-label="Dietary preference">{DIETS.map(value => <button key={value} type="button" aria-pressed={diet === value} onClick={() => setDiet(value)} className={`flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-base transition-colors focus-visible:ring-2 focus-visible:ring-ring ${diet === value ? 'bg-accent font-semibold text-accent-foreground' : 'text-muted-foreground hover:bg-muted'}`}>{value !== 'All' && <span aria-hidden="true" className={`h-2 w-2 rounded-full ${value === 'Veg' ? 'bg-success' : 'bg-destructive'}`} />}{value}</button>)}</div>
      </div>
    </section>
    <section aria-label={`${category === 'All' ? 'All' : category} dishes`} className="mt-10 space-y-8">
      <div className="space-y-3"><h2 className="text-xl font-heading font-semibold">{category === 'All' ? 'The complete menu' : category} <span className="text-base text-muted-foreground">({items.length} dishes)</span></h2><p className="text-base leading-relaxed text-muted-foreground">Prices and portions transcribed from the supplied menu. All dish photos are real photographs of the restaurant’s actual dishes.</p></div>
      {items.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(item => <article key={`${item.category}-${item.name}`} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <SitePhoto src={item.image} alt={`Real photograph of ${item.name}, ${item.category.toLowerCase()} at P Cube Charcoal Foody Den`} className="aspect-[4/3] w-full object-cover" />
        <div className="space-y-4 p-6"><div className="flex flex-wrap items-center gap-2">{item.diet && <Badge variant="outline" className={dietStyles[item.diet]}>{item.diet}</Badge>}<span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{item.category}</span></div><h3 className="text-lg font-medium break-words">{item.name}</h3><p className="text-lg leading-relaxed tabular-nums text-primary">{item.price}</p></div>
      </article>)}</div> : <div className="rounded-2xl border border-border bg-card p-6 space-y-4"><h3 className="text-xl font-heading font-semibold">No dishes match your filters.</h3><p className="text-base text-muted-foreground">Try another dish name, category or dietary preference.</p><button type="button" onClick={reset} className={`${outlineClass} active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none`}>Reset filters</button></div>}
    </section>
  </div>;
}