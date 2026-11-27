// Customer reviews shown on the Home page and /reviews.
//
// IMPORTANT: only add REAL reviews, copied word for word from a genuine customer
// (Google Maps, WhatsApp, in person) with their permission. Never invent or edit them.
// If this list is ever emptied the site falls back to an honest "read our reviews on Google" card
// and publishes NO review or rating structured data.
//
// Each entry: { title: 'Short label', author: 'Name (optional)', rating: 5, text: 'Exact review text', source: 'Google', date: '2026-11-01' }
// (rating 1-5 and date YYYY-MM-DD are optional; add them only if known.)
export const REVIEWS = [
  { title: 'Food & Taste', rating: 5, text: 'Really enjoyed the food at P Cube! The starters were delicious, and the overall menu has plenty of options. Definitely a place worth exploring if you\u2019re around Bowenpally.' },
  { title: 'Menu Variety', rating: 5, text: 'A nice place for enjoying different kinds of food. From noodles and fried rice to biryani, there\u2019s something for everyone. Loved exploring the menu!' },
  { title: 'Dining Experience', rating: 5, text: 'Had a good dining experience at P Cube Charcoal Foody Den. The food was enjoyable, and it\u2019s a nice option when you\u2019re craving some delicious starters and a satisfying meal.' },
  { title: 'Location & Convenience', rating: 5, text: 'A convenient food spot in Old Bowenpally with a variety of vegetarian and non-vegetarian dishes. Looking forward to trying more items from their menu!' },
];

// Opens the restaurant's Google Maps listing (Reviews tab). Derived from the place ID in the Contact page map embed.
export const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?cid=12147837996646170311';

// Opens Google's "Write a review" form for the restaurant (used by the hero "Rate on Google" button).
export const GOOGLE_WRITE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJ3X2MRACbyzsRx34Ww0vKlag';
