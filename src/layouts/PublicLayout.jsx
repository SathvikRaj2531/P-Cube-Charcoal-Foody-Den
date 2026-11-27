import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import { SOCIAL_VERIFIED } from '@/config/business';
import { BUSINESS, AshRule, ExternalLink, SocialIcon, WhatsApp, textLinkClass } from '@/components/Restaurant';

const destinations = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

function Brand() {
  return <Link to="/" aria-label="P Cube Charcoal Foody Den home" className="inline-flex min-h-11 items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
    <img src="/images/p-cube-logo.png" alt="P Cube Charcoal Foody Den logo" width="56" height="56" decoding="async" className="h-12 w-12 shrink-0 rounded-full md:h-14 md:w-14" />
    <span className="min-w-0"><span className="block font-heading text-3xl font-semibold leading-none tracking-tight md:text-[2rem]">P Cube</span><span className="mt-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-warning md:text-[0.8rem]">Charcoal Foody Den</span></span>
  </Link>;
}

function SiteNav() {
  return <nav aria-label="Main navigation" className="flex items-center gap-2">
    {destinations.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `flex min-h-12 shrink-0 items-center rounded-full px-6 text-base font-medium transition-colors duration-[var(--transition-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? 'bg-sidebar-accent font-bold text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/60'}`}>{item.label}</NavLink>)}
  </nav>;
}

// Mobile / tablet: circular hamburger button that opens a dropdown menu of all pages.
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <div className="lg:hidden">
    <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 text-primary transition-colors hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <ApperIcon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
    </button>
    {open && <button type="button" aria-label="Close menu" tabIndex={-1} onClick={() => setOpen(false)} className="fixed inset-x-0 bottom-0 top-20 z-[-1] cursor-default bg-black/60" />}
    <nav id="mobile-menu" aria-label="Mobile navigation" hidden={!open} className="absolute inset-x-0 top-full border-b border-sidebar-border bg-sidebar px-4 pb-5 pt-3 shadow-xl">
      <ul className="mx-auto flex max-w-[1800px] flex-col gap-1">
        {destinations.map(item => <li key={item.to}><NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `flex min-h-12 items-center rounded-xl px-4 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive ? 'bg-sidebar-accent font-bold text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/60'}`}>{item.label}</NavLink></li>)}
      </ul>
      <WhatsApp className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-sidebar-border px-4 text-sm font-semibold text-sidebar-foreground hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-ring" />
    </nav>
  </div>;
}

export default function PublicLayout() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);
  return <div className="min-h-svh bg-background font-sans text-foreground">
    <a href="#main-content" className="fixed left-4 top-2 z-[var(--z-tooltip)] -translate-y-24 rounded bg-primary px-5 py-3 text-primary-foreground focus:translate-y-0">Skip to content</a>
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-sidebar-border bg-sidebar/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-[1800px] items-center justify-between gap-4 px-4 md:px-8 xl:px-12">
        <Brand />
        <div className="hidden lg:block"><SiteNav /></div>
        <div className="flex items-center gap-3">
          <div className="hidden xl:block"><WhatsApp className="inline-flex min-h-12 items-center gap-2 rounded-full border border-sidebar-border px-5 text-sm font-semibold text-sidebar-foreground transition-colors hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-ring" /></div>
          <MobileMenu />
        </div>
      </div>
    </header>
    <main id="main-content" tabIndex={-1} className="outline-none"><Outlet /></main>
    <footer className="mt-8 border-t border-border bg-sidebar text-sidebar-foreground">
      <div className="mx-auto max-w-[1800px] px-4 py-14 md:px-8 xl:px-12 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_1fr_.7fr]">
          <section><Brand /><p className="mt-5 max-w-xs text-base leading-7 text-muted-foreground">Soups, starters, noodles,<br />fried rice and biryani.</p><p className="mt-4 text-sm uppercase tracking-[0.15em] text-warning">Vegetarian &amp; non-vegetarian</p></section>
          <section><h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]">Visit</h2><p className="text-base leading-7 text-muted-foreground">{BUSINESS.address}</p><p className="mt-4 text-base">{BUSINESS.hours}</p><ExternalLink href={BUSINESS.maps} className={`${textLinkClass} mt-2`}>Get directions<ApperIcon name="ArrowUpRight" className="h-4 w-4" /></ExternalLink></section>
          <section><h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]">Contact</h2><div className="flex flex-col items-start gap-1"><a href={BUSINESS.phoneHref} className={textLinkClass}>{BUSINESS.phone}</a><WhatsApp className={textLinkClass} /></div>{SOCIAL_VERIFIED && <div className="mt-4 flex gap-2">{['instagram', 'facebook'].map(name => <ExternalLink key={name} href={BUSINESS[name]} aria-label={name === 'instagram' ? 'Instagram' : 'Facebook'} className="flex h-11 w-11 items-center justify-center rounded-full border border-sidebar-border transition-colors hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-ring"><SocialIcon name={name} /></ExternalLink>)}</div>}</section>
          <section><h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]">Explore</h2><div className="flex flex-col items-start">{destinations.map(item => <Link key={item.to} to={item.to} className="inline-flex min-h-11 items-center rounded text-base text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring">{item.label}</Link>)}<Link to="/restaurant-information" className="inline-flex min-h-11 items-center rounded text-base text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring">Restaurant information</Link></div></section>
        </div>
        <AshRule className="mt-12" />
        <div className="flex flex-wrap justify-between gap-3 text-sm text-muted-foreground"><p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> {BUSINESS.name}</p><p>Old Bowenpally · Secunderabad</p></div>
      </div>
    </footer>
  </div>;
}