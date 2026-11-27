import { useState } from 'react';
import SitePhoto from '@/components/SitePhoto';
import { AshRule, BUSINESS } from '@/components/Restaurant';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { seoMeta, SITE_URL } from '@/lib/seo';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from '@/lib/photos';

export function meta() {
  return seoMeta({
    title: 'Food & Restaurant Gallery | P Cube Charcoal Foody Den',
    ogTitle: 'Food & Restaurant Gallery | P Cube Charcoal Foody Den',
    description: 'Explore the food and restaurant gallery of P Cube Charcoal Foody Den in Old Bowenpally, Secunderabad.',
    path: '/gallery',
    breadcrumb: 'Gallery',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'ImageGallery', name: 'P Cube Charcoal Foody Den Gallery', url: `${SITE_URL}/gallery`, about: { '@id': `${SITE_URL}/#restaurant` } }],
  });
}

const filters = ['All', ...GALLERY_CATEGORIES];
const altFor = photo => `${photo.title} at P Cube Charcoal Foody Den`;

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);
  const visible = GALLERY_PHOTOS.filter(photo => category === 'All' || photo.category === category);
  return <div className="mx-auto max-w-[1800px] space-y-8 px-4 py-12 md:px-8 xl:px-12 md:py-20">
    <header className="max-w-3xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-wide text-warning">{BUSINESS.name}</p>
      <h1 className="font-heading text-4xl md:text-5xl">Explore Our Food Gallery</h1>
      <AshRule />
      <p className="text-lg leading-relaxed text-muted-foreground">Food, interiors and restaurant moments, all in one place.</p>
    </header>
    <div role="group" aria-label="Gallery categories" className="flex flex-wrap gap-3">
      {filters.map(value => <Button key={value} type="button" variant={category === value ? 'default' : 'outline'} aria-pressed={category === value} onClick={() => setCategory(value)} className="rounded-full active:scale-[0.98] transition-transform duration-(--transition-fast)">{value}</Button>)}
    </div>
    <section aria-label={`${category} photographs`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map(photo => <figure key={`${photo.category}-${photo.title}`} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <button type="button" onClick={() => setSelected(photo)} aria-label={`Enlarge ${photo.title}`} className="block w-full overflow-hidden transition-opacity duration-(--transition-fast) hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring active:opacity-80 disabled:pointer-events-none disabled:opacity-50">
          <SitePhoto src={photo.src} alt={altFor(photo)} className="aspect-[4/3] w-full object-cover" />
        </button>
        <figcaption className="space-y-2 p-6"><h2 className="text-lg font-medium break-words">{photo.title}</h2><p className="text-base text-muted-foreground">{photo.category}</p></figcaption>
      </figure>)}
    </section>
    <Dialog open={Boolean(selected)} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="flex max-h-[85vh] max-w-5xl flex-col gap-0 overflow-hidden bg-card p-0">
        <DialogHeader className="shrink-0 border-b border-border p-6">
          <DialogTitle className="text-xl font-heading font-semibold">{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.category}</DialogDescription>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto p-6">{selected && <SitePhoto key={selected.title} src={selected.src} alt={altFor(selected)} className="max-h-[60vh] w-full rounded-xl object-contain" />}</div>
      </DialogContent>
    </Dialog>
  </div>;
}