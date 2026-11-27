import { Link } from 'react-router';
import ApperIcon from '@/components/ApperIcon';
import { BUSINESS, AshRule, ExternalLink, WhatsApp, actionClass, outlineClass, textLinkClass } from '@/components/Restaurant';
import { REVIEWS, GOOGLE_REVIEWS_URL } from '@/data/reviews';
import { SITE_URL } from '@/lib/seo';

export const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.458702060929!2d78.4918059!3d17.4856035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b00448c7ddd%3A0xa895ca4bc3167ec7!2sP%20Cube%20Charcoal%20Foody%20Den!5e0!3m2!1sen!2sin!4v1794593679770!5m2!1sen!2sin';

// Review structured data is emitted only when real reviews exist (no invented ratings).
const NAMED = REVIEWS.filter(r => r.author);
// Only reviews with a named author are published as structured data.
export const reviewsLd = NAMED.length === 0 ? [] : [{
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${SITE_URL}/#restaurant`,
  name: BUSINESS.name,
  review: NAMED.map(r => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewBody: r.text,
    ...(r.date ? { datePublished: r.date } : {}),
    ...(r.rating ? { reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 } } : {}),
  })),
}];

function Stars({ rating }) {
  return <p className="flex gap-1 text-warning" role="img" aria-label={`${rating} out of 5 stars`}>{[1, 2, 3, 4, 5].map(n => <ApperIcon key={n} name="Star" className={`h-4 w-4 ${n <= rating ? 'fill-current' : 'opacity-30'}`} />)}</p>;
}

export function ReviewCard({ review }) {
  return <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 md:p-7">
    <div className="flex items-center justify-between gap-3">{review.rating ? <Stars rating={review.rating} /> : <ApperIcon name="Quote" className="h-5 w-5 text-primary" />}<ApperIcon name="Quote" className="h-6 w-6 text-primary/40" /></div>
    {review.title && <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-warning">{review.title}</p>}
    <blockquote className="mt-3 flex-1 text-lg leading-8 text-foreground/90">“{review.text}”</blockquote>
    <figcaption className="mt-5 text-sm text-muted-foreground">{review.author ? <span className="font-semibold text-foreground">{review.author}</span> : 'Guest review'}{review.source && ` · ${review.source}`}{review.date && ` · ${review.date}`}</figcaption>
  </figure>;
}

// Shown while there are no verified reviews to display.
export function ReviewsInvite() {
  return <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
    <ApperIcon name="MessageSquareHeart" className="h-7 w-7 text-primary" />
    <h3 className="mt-5 font-heading text-2xl">Read what guests say on Google.</h3>
    <AshRule />
    <p className="text-base leading-7 text-muted-foreground">Our guest reviews and ratings live on our Google Maps listing, where each one is posted by a real customer. Open the listing to read them, or share your own experience after your visit.</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <ExternalLink href={GOOGLE_REVIEWS_URL} className={actionClass}>Reviews on Google<ApperIcon name="ArrowUpRight" className="h-4 w-4" /></ExternalLink>
      <WhatsApp className={outlineClass}>Send us feedback</WhatsApp>
    </div>
  </div>;
}

export function MapEmbed({ className = 'h-80 sm:h-96' }) {
  return <div className="overflow-hidden rounded-xl border border-border">
    <iframe title="P Cube Charcoal Foody Den location on Google Maps" src={MAP_EMBED_SRC} width="600" height="450" className={`block w-full border-0 ${className}`} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
  </div>;
}

// Home page block: customer reviews + Google Map, side by side.
export function ReviewsAndMap() {
  const shown = REVIEWS.slice(0, 3);
  return <section aria-labelledby="reviews-map-title" className="mx-auto max-w-[1800px] px-4 pb-12 md:px-8 xl:px-12 md:pb-20">
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warning">Customer reviews</p>
        <h2 id="reviews-map-title" className="font-heading text-3xl leading-tight md:text-5xl">What our guests say.</h2>
        <AshRule />
        <div className="space-y-4">{shown.length > 0 ? shown.map(r => <ReviewCard key={r.text.slice(0, 20)} review={r} />) : <ReviewsInvite />}</div>
        <Link to="/reviews" className={`${textLinkClass} mt-4`}>All reviews<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link>
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warning">Find us</p>
        <h2 className="font-heading text-3xl leading-tight md:text-5xl">Old Bowenpally, Secunderabad.</h2>
        <AshRule />
        <MapEmbed className="h-80 sm:h-96 lg:h-[26rem]" />
        <p className="mt-4 text-base leading-7 text-muted-foreground">{BUSINESS.address}</p>
        <div className="mt-4 flex flex-wrap gap-x-8"><ExternalLink href={BUSINESS.directions} className={textLinkClass}>Get directions<ApperIcon name="ArrowUpRight" className="h-4 w-4" /></ExternalLink><Link to="/contact" className={textLinkClass}>Contact details<ApperIcon name="ArrowRight" className="h-4 w-4" /></Link></div>
      </div>
    </div>
  </section>;
}
