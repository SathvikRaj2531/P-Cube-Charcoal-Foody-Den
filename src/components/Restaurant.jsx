import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { toast } from 'sonner';
import ApperIcon from '@/components/ApperIcon';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import SitePhoto from '@/components/SitePhoto';
import { ABOUT_PHOTO } from '@/lib/photos';
import { BUSINESS } from '@/config/business';
export { BUSINESS };

const GRILL_BASE = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1';
export const GRILL_IMAGE = `${GRILL_BASE}?auto=format&fit=crop&w=1600&q=85`;
export const HERO_BASE = 'https://images.unsplash.com/photo-1608039755401-742074f0548d';
export const actionClass = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors duration-[var(--transition-fast)] hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';
export const outlineClass = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 text-base font-semibold text-foreground transition-colors duration-[var(--transition-fast)] hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
export const textLinkClass = 'inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded';

export function ExternalLink({ href, children, className = actionClass, ...props }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>{children}</a>;
}

export function WhatsApp({ className = actionClass, children = 'Chat on WhatsApp' }) {
  return <ExternalLink href={BUSINESS.whatsapp} className={className}><SocialIcon name="whatsapp" />{children}</ExternalLink>;
}

export function SocialIcon({ name }) {
  if (name === 'instagram') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
  if (name === 'facebook') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 shrink-0"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.3-.4A10 10 0 1 1 12 22Zm5.5-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2.1-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z" /></svg>;
}

export function AshRule({ className = '' }) {
  return <div aria-hidden="true" className={`relative my-6 h-px w-full bg-primary/40 ${className}`}>
    <span className="absolute left-1/2 top-1/2 h-8 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-xl" />
  </div>;
}

// Scroll-reveal. Content is always painted visible in the prerendered HTML (so it
// is readable without JavaScript and never flashes hidden before hydration).
// After hydration, only blocks that start below the fold are armed to fade/slide
// in when they scroll into view; blocks already on screen stay put.
export function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  useEffect(() => {
    if (reduced || !ref.current) return;
    if (ref.current.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, [reduced]);
  const hidden = armed && !inView;
  return <motion.div ref={ref} className={className} initial={false} animate={hidden ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.32, delay: hidden || reduced ? 0 : delay }}>{children}</motion.div>;
}

export function SectionHeading({ eyebrow, title, children }) {
  return <div className="max-w-2xl">
    {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warning">{eyebrow}</p>}
    <h2 className="font-heading text-3xl leading-tight md:text-5xl">{title}</h2>
    <AshRule />
    {children && <p className="text-lg leading-7 text-muted-foreground">{children}</p>}
  </div>;
}

export function GrillPhoto({ className = '', eager = false, base = GRILL_BASE, alt = 'Meat cooking on the grill at P Cube Charcoal Foody Den' }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  // An <img> that errored before hydration never delivers onError, so re-check once mounted.
  useEffect(() => { const el = ref.current; if (el?.complete && el.naturalWidth === 0) setFailed(true); }, []);
  if (failed) return null;
  const full = `${base}?auto=format&fit=crop&w=1600&q=85`;
  return <img ref={ref} src={full} srcSet={`${base}?auto=format&fit=crop&w=640&q=80 640w, ${base}?auto=format&fit=crop&w=1100&q=80 1100w, ${full} 1600w`} sizes="(max-width: 768px) 100vw, 75vw" width="1600" height="1067" alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" onError={() => setFailed(true)} className={className} />;
}

export function PhotoStudy() {
  const [open, setOpen] = useState(false);
  const photo = (className) => ABOUT_PHOTO
    ? <SitePhoto src={ABOUT_PHOTO} alt="A guest enjoying a table of dishes at P Cube Charcoal Foody Den" className={className} />
    : <GrillPhoto className={className} />;
  return <figure>
    <button type="button" aria-label="Enlarge photograph" onClick={() => setOpen(true)} className="block w-full overflow-hidden rounded-2xl border border-border text-left transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {photo('aspect-[4/3] w-full object-cover')}
    </button>
    <figcaption className="mt-3 text-sm leading-5 text-muted-foreground">{ABOUT_PHOTO ? 'P Cube Charcoal Foody Den' : 'Grill study · photographed at P Cube.'}</figcaption>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl border-border bg-card p-5">
        <DialogTitle className="font-heading text-xl">{ABOUT_PHOTO ? 'P Cube Charcoal Foody Den' : ''}</DialogTitle>
        {photo('max-h-[65vh] w-full rounded-lg object-contain')}
      </DialogContent>
    </Dialog>
  </figure>;
}

export async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(successMessage);
  } catch {
    toast.error('Copy unavailable. Select and copy the text instead.');
  }
}

export function VisitCard({ copy = false }) {
  return <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-warning">Come by</p>
    <h3 className="mt-3 font-heading text-2xl">Old Bowenpally,<br />Secunderabad.</h3>
    <AshRule />
    <div className="flex items-start gap-3">
      <ApperIcon name="MapPin" className="mt-1 h-5 w-5 shrink-0 text-primary" />
      <p className="text-base leading-7 text-muted-foreground">{BUSINESS.address}</p>
      {copy && <button type="button" aria-label="Copy address" onClick={() => copyText(BUSINESS.address, 'Address copied')} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ApperIcon name="Copy" className="h-4 w-4" /></button>}
    </div>
    <p className="mt-5 flex items-center gap-3 text-base"><ApperIcon name="Clock3" className="h-5 w-5 text-primary" />{BUSINESS.hours}</p>
    <a href={BUSINESS.phoneHref} className={`${textLinkClass} mt-4`}><ApperIcon name="Phone" className="h-4 w-4" />{BUSINESS.phone}</a>
    <div className="mt-6"><WhatsApp className={`${actionClass} w-full`} /></div>
  </div>;
}

export function Breadcrumb({ label }) {
  return <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-3 text-base text-muted-foreground"><Link to="/" className={textLinkClass}><ApperIcon name="ArrowLeft" className="h-4 w-4" />Home</Link><span aria-hidden="true">/</span><span>{label}</span></nav>;
}