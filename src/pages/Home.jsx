import { Link } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import SitePhoto from '@/components/SitePhoto';
import RestaurantHome from '@/components/RestaurantHome';
import { ReviewsAndMap, reviewsLd } from '@/components/Reviews';
import { AshRule, textLinkClass } from '@/components/Restaurant';
import { GALLERY_PREVIEW } from '@/lib/photos';
import { seoMeta, restaurantLd, SITE_URL } from '@/lib/seo';

export function meta() {
  return seoMeta({
    title: 'P Cube Charcoal Foody Den | Restaurant in Old Bowenpally, Secunderabad',
    ogTitle: 'P Cube Charcoal Foody Den | Old Bowenpally, Secunderabad',
    description: 'P Cube Charcoal Foody Den, Old Bowenpally, Secunderabad. Soups, starters, noodles, fried rice and biryani, veg and non-veg. Open 01:30 PM to 11:30 PM.',
    path: '/',
    jsonLd: [restaurantLd, ...reviewsLd, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'P Cube Charcoal Foody Den', url: `${SITE_URL}/` }],
  });
}

export default function Home() {
  return <>
    <RestaurantHome />
    <section aria-labelledby="gallery-preview-title" className="mx-auto max-w-[1800px] space-y-8 px-4 py-12 md:px-8 xl:px-12 md:py-20">
      <div><p className="mb-3 text-sm font-medium uppercase tracking-wide text-warning">Food · Interior</p><h2 id="gallery-preview-title" className="text-xl font-heading font-semibold">Explore the gallery</h2><AshRule /><p className="text-base text-muted-foreground">Real photographs of our food and restaurant.</p></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{GALLERY_PREVIEW.map(photo => <figure key={`${photo.category}-${photo.title}`} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card"><SitePhoto src={photo.src} alt={`${photo.title} at P Cube Charcoal Foody Den`} className="aspect-[4/3] w-full object-cover" /><figcaption className="p-6"><span className="block text-lg font-medium">{photo.title}</span><span className="mt-1 block text-sm uppercase tracking-wide text-muted-foreground">{photo.category}</span></figcaption></figure>)}</div>
      <Link to="/gallery" className={`${textLinkClass} active:opacity-80 transition-opacity duration-(--transition-fast)`}>View gallery<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link>
    </section>
    <ReviewsAndMap />
  </>;
}
