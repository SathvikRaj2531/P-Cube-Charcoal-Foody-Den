import { useEffect, useState } from 'react';
import ApperIcon from '@/components/ApperIcon';
import { seoMeta, restaurantLd, SITE_URL } from '@/lib/seo';
import { SOCIAL_VERIFIED } from '@/config/business';
import { BUSINESS, Breadcrumb, AshRule, VisitCard, ExternalLink, SocialIcon, WhatsApp, outlineClass } from '@/components/Restaurant';

export function meta() {
  return seoMeta({
    title: 'Contact P Cube Charcoal Foody Den | Old Bowenpally, Secunderabad',
    ogTitle: 'Contact P Cube Charcoal Foody Den',
    description: `Visit P Cube Charcoal Foody Den at ${BUSINESS.address}. Open ${BUSINESS.hours}. Call ${BUSINESS.phone} or message on WhatsApp.`,
    path: '/contact',
    breadcrumb: 'Contact',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact P Cube Charcoal Foody Den', url: `${SITE_URL}/contact`, mainEntity: { '@id': `${SITE_URL}/#restaurant` } },
      restaurantLd,
    ],
  });
}

function isOpenInIndia(date) {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(date);
  const hour = Number(parts.find(part => part.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find(part => part.type === 'minute')?.value ?? 0);
  const time = hour * 60 + minute;
  return time >= 810 && time < 1410;
}

export default function Contact() {
  // null until mounted: the open/closed badge depends on the visitor's clock, so it is not part of the prerendered HTML.
  const [now, setNow] = useState(null);
  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);
  const open = now ? isOpenInIndia(now) : null;
  return <div className="mx-auto max-w-[1800px] px-4 pb-[calc(7rem+env(safe-area-inset-bottom))] pt-12 md:px-8 xl:px-12 md:py-20">
    <Breadcrumb label="Contact" />
    <header><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-warning">Old Bowenpally · Secunderabad</p><h1 className="max-w-4xl font-heading text-4xl md:text-6xl">Visit or Contact<br /><span className="italic">P Cube Charcoal Foody Den</span></h1><div className="mt-6 flex flex-wrap items-center gap-4"><p className="text-base text-muted-foreground">Open {BUSINESS.hours}</p>{open !== null && <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold ${open ? 'border-success-border bg-success-muted text-success' : 'border-border bg-muted text-muted-foreground'}`}><span className={`h-1.5 w-1.5 rounded-full ${open ? 'bg-success' : 'bg-muted-foreground'}`} />{open ? 'Open Now' : 'Closed · Opens 01:30 PM'}</span>}<span className="text-sm text-muted-foreground">India Standard Time</span></div><AshRule className="my-10" /></header>
    <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
      <VisitCard copy />
      <section aria-labelledby="restaurant-map-heading" className="min-w-0 overflow-hidden rounded-2xl border border-border bg-muted p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Your destination</p>
        <h2 id="restaurant-map-heading" className="mt-3 text-xl font-heading font-semibold">{BUSINESS.name}</h2>
        <AshRule />
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="P Cube Charcoal Foody Den location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.458702060929!2d78.4918059!3d17.4856035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b00448c7ddd%3A0xa895ca4bc3167ec7!2sP%20Cube%20Charcoal%20Foody%20Den!5e0!3m2!1sen!2sin!4v1794593679770!5m2!1sen!2sin"
            width="600"
            height="450"
            className="block h-80 w-full border-0 sm:h-96 lg:h-[450px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <ExternalLink href={BUSINESS.directions} className={`${outlineClass} mt-6 w-full active:scale-[0.98] transition-transform duration-(--transition-fast)`}>Get Directions<ApperIcon name="ArrowUpRight" className="h-4 w-4 shrink-0" /></ExternalLink>
      </section>
    </div>
    {SOCIAL_VERIFIED && <section className="mt-12 flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center md:p-8"><div><h2 className="font-heading text-2xl">Keep in touch.</h2><p className="mt-2 text-base text-muted-foreground">Find P Cube on Instagram and Facebook.</p></div><div className="flex flex-wrap gap-3">{[{ name: 'instagram', label: 'Instagram' }, { name: 'facebook', label: 'Facebook' }].map(item => <ExternalLink key={item.name} href={BUSINESS[item.name]} className={outlineClass}><SocialIcon name={item.name} />{item.label}<ApperIcon name="ArrowUpRight" className="h-3 w-3" /></ExternalLink>)}</div></section>}
    <div className="fixed inset-x-0 bottom-0 z-[var(--z-sticky)] border-t border-border bg-background/95 px-4 pb-[calc(.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden"><WhatsApp className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" /></div>
  </div>;
}