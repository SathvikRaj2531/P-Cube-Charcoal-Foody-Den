import { PHOTOS_CONFIRMED } from '@/config/business';
// Real photos: drop files into src/assets/about/ and src/assets/gallery/.
// Gallery filenames: category--title.jpg  (e.g. food--charcoal-chicken-65.jpg)
const GALLERY_FILES = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' });
const ABOUT_FILES = import.meta.glob('/src/assets/about/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' });

const titleCase = text => text.replace(/-+/g, ' ').trim().replace(/\b\w/g, c => c.toUpperCase());
const unsplash = id => `https://images.unsplash.com/${id}`;

// Shown only until real photos are added.
const FALLBACK_GALLERY = [
  { title: 'At the grill', category: 'Food', src: unsplash('photo-1555939594-58d7cb561ad1') },
  { title: 'A warm beginning', category: 'Food', src: unsplash('photo-1547592180-85f173990554') },
  { title: 'Noodle inspiration', category: 'Food', src: unsplash('photo-1569718212165-3a8278d5f624') },
  { title: 'Around the table', category: 'Interior', src: unsplash('photo-1517248135467-4c7edcad34c4') },
  { title: 'Dining atmosphere', category: 'Interior', src: unsplash('photo-1414235077428-338989a2e8c0') },
  { title: 'Restaurant inspiration', category: 'Restaurant', src: unsplash('photo-1552566626-52f8b828add9') },
];

// Gallery order: Food first, then Customer, Interior, Restaurant (anything else after, alphabetically).
export const GALLERY_CATEGORY_ORDER = ['Food', 'Customer', 'Interior', 'Restaurant'];
const categoryRank = category => { const i = GALLERY_CATEGORY_ORDER.indexOf(category); return i === -1 ? GALLERY_CATEGORY_ORDER.length : i; };

const ownGallery = Object.entries(GALLERY_FILES)
  .map(([path, src]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '');
    const [category, ...rest] = name.includes('--') ? name.split('--') : ['restaurant', name];
    return { sortKey: name.toLowerCase(), title: titleCase(rest.join(' ')), category: titleCase(category), src };
  })
  .sort((a, b) => categoryRank(a.category) - categoryRank(b.category) || a.sortKey.localeCompare(b.sortKey));

// The owner has confirmed the supplied gallery images are genuine photographs of the restaurant.
export const GALLERY_IS_ACTUAL = ownGallery.length > 0 && PHOTOS_CONFIRMED;
export const GALLERY_PHOTOS = ownGallery.length > 0 ? ownGallery : FALLBACK_GALLERY;
export const GALLERY_CATEGORIES = [...new Set(GALLERY_PHOTOS.map(photo => photo.category))];
// Home page preview: these three photographs, in this order (matched by title).
export const HOME_GALLERY_TITLES = ['Charcoal Starter Platter', 'The Biryani Handi', 'The Famous Monkey Corner'];
export const GALLERY_PREVIEW = HOME_GALLERY_TITLES.map(title => GALLERY_PHOTOS.find(photo => photo.title === title)).filter(Boolean);

export const ABOUT_PHOTO = Object.entries(ABOUT_FILES).sort(([a], [b]) => a.localeCompare(b))[0]?.[1] ?? null;