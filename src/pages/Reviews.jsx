import { Link } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import { BUSINESS, Breadcrumb, AshRule, ExternalLink, WhatsApp, actionClass, textLinkClass } from '@/components/Restaurant';
import { ReviewCard, ReviewsInvite, reviewsLd } from '@/components/Reviews';
import { REVIEWS, GOOGLE_REVIEWS_URL } from '@/data/reviews';
import { seoMeta, restaurantLd, SITE_URL } from '@/lib/seo';

export function meta() {
  return seoMeta({
    title: 'Customer Reviews & Testimonials | P Cube Charcoal Foody Den, Secunderabad',
    ogTitle: 'Customer Reviews | P Cube Charcoal Foody Den',
    description: 'Read what guests say about P Cube Charcoal Foody Den in Old Bowenpally, Secunderabad, and share your own experience of our biryani, noodles, fried rice, soups and starters.',
    path: '/reviews',
    breadcrumb: 'Reviews',
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Customer reviews of P Cube Charcoal Foody Den', url: `${SITE_URL}/reviews`, about: { '@id': `${SITE_URL}/#restaurant` } },
      restaurantLd,
      ...reviewsLd,
    ],
  });
}

export default function Reviews() {
  return <div className="mx-auto max-w-[1800px] px-4 py-12 md:px-8 xl:px-12 md:py-20">
    <Breadcrumb label="Reviews" />
    <header className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-warning">{BUSINESS.name}</p>
      <h1 className="font-heading text-4xl md:text-6xl">Customer Reviews<br /><span className="italic">&amp; Testimonials</span></h1>
      <AshRule />
      <p className="text-lg leading-7 text-muted-foreground">Guests tell us about their visits to our restaurant in Old Bowenpally, Secunderabad. Here is what some of them have shared.</p>
    </header>
    <section aria-label="Guest reviews" className="mt-10">
      {REVIEWS.length > 0
        ? <div className="grid gap-6 sm:grid-cols-2">{REVIEWS.map(r => <ReviewCard key={r.text.slice(0, 20)} review={r} />)}</div>
        : <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]"><ReviewsInvite />
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8"><h2 className="font-heading text-2xl">Share your experience</h2><AshRule /><p className="text-base leading-7 text-muted-foreground">Visited P Cube Charcoal Foody Den? Tell others what you ordered and how you found it, on Google Maps or directly with us on WhatsApp.</p><ul className="mt-5 space-y-1 text-base text-muted-foreground"><li>Open {BUSINESS.hours} (IST)</li><li>{BUSINESS.address}</li></ul></div></div>}
    </section>
    {REVIEWS.length > 0 && <section aria-label="Share your experience" className="mt-10"><ReviewsInvite /></section>}
    <section aria-labelledby="reviews-next" className="mt-16 flex flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center md:p-8">
      <div><h2 id="reviews-next" className="font-heading text-2xl">Ready to visit?</h2><p className="mt-2 text-base text-muted-foreground">See the menu, view the gallery or get directions.</p></div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2"><Link to="/menu" className={actionClass}>Explore Menu<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link><Link to="/gallery" className={textLinkClass}>Gallery</Link><Link to="/contact" className={textLinkClass}>Contact</Link><ExternalLink href={GOOGLE_REVIEWS_URL} className={textLinkClass}>Google Maps listing<ApperIcon name="ArrowUpRight" className="h-4 w-4" /></ExternalLink></div>
    </section>
  </div>;
}
