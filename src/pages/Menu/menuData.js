export const FOOD_IMAGES = {
  soup: 'https://images.unsplash.com/photo-1547592180-85f173990554',
  paneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
  grill: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
  starter: 'https://images.unsplash.com/photo-1608039755401-742074f0548d',
  noodles: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624',
  rice: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
  biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
};

// Real dish photos: drop files into src/assets/menu/ named after the dish (see DISH_PHOTO_FILENAMES.txt).
const DISH_PHOTOS = import.meta.glob('/src/assets/menu/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' });
export const slugify = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const photoBySlug = Object.fromEntries(Object.entries(DISH_PHOTOS).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase(), url]));

// Source of truth: P_Cube_Charcoal_Foody_Den_Menu_Master.docx. Prices in ₹.
// Dish tuple: [name, first price, second price]. Second price: number or undefined (none listed).
// A 4th element 'flat' shows a single plain price (used for biryani extras).
const PORTIONS = { Soups: null, Biryani: ['Half', 'Full'] };
const DEFAULT_PORTIONS = ['Single', 'Full'];

const groups = [
  ['Soups', 'Veg', 'soup', [
    ['Veg Corn Soup', 90], ['Veg Paneer Soup', 120], ['Veg Clear Soup', 80],
    ['Veg Manchurian Soup', 120], ['Hot Corn Sour Soup', 90],
    ['American Chop Suey Soup', 120], ['Tomato Soup', 120],
  ]],
  ['Soups', 'Non-Veg', 'soup', [
    ['Chicken Soup', 125], ['Chicken Clear Soup', 125], ['Chicken Manchow Soup', 125],
    ['Chicken Pepper Soup', 125], ['Chicken Chop Suey Soup', 125],
  ]],
  ['Starters', 'Veg', 'paneer', [
    ['Veg Manchurian Dry/Wet', 90, 150], ['Paneer Manchurian', 150, 210],
    ['Paneer 65', 160, 300], ['Paneer Chilli Manchurian', 160, 310],
    ['Paneer Garlic Manchurian', 160, 310], ['Pepper Paneer', 160, 310],
    ['Hong Kong Manchurian', 170, 300],
  ]],
  ['Starters', 'Non-Veg', 'starter', [
    ['Chicken Manchurian Dry/Wet', 150, 270], ['Chicken 65', 170, 290],
    ['Chicken Garlic', 170, 280], ['Chicken Pepper', 170, 280],
    ['Chicken Lollipops (4 pcs)', 150], ['Chilli Chicken', 170, 280],
    ['Ginger Chicken', 170, 280],
  ]],
  ['Noodles', 'Veg', 'noodles', [
    ['Veg Noodles', 80, 140], ['Veg Manchurian Noodles', 100, 160],
    ['Veg Paneer Noodles', 140, 200], ['Veg Garlic Noodles', 100, 160],
    ['Veg Hakka Noodles', 110, 170], ['Veg Chilli Noodles', 100, 140],
    ['Veg Hong Kong Noodles', 130, 190], ['Veg Singapore Noodles', 130, 190],
    ['Veg Malaysian Noodles', 130, 190],
  ]],
  ['Noodles', 'Non-Veg', 'noodles', [
    ['Chicken Soft Noodles', 100, 170], ['Chicken Manchurian Noodles', 150, 230],
    ['Chicken Garlic Noodles', 140, 210], ['Chicken Hakka Noodles', 150, 210],
    ['Chicken Chilli Noodles', 150, 200], ['Chicken Hong Kong Noodles', 150, 210],
    ['Chicken Singapore Noodles', 150, 210], ['Chicken Malaysian Noodles', 150, 210],
    ['Double Egg Chicken Noodles', 110, 190], ['Egg Noodles', 90, 150],
    ['Double Egg Noodles', 100, 160], ['Chicken Szechuan Noodles (Must Try)', 170, 280],
  ]],
  ['Fried Rice', 'Veg', 'rice', [
    ['Veg Fried Rice', 80, 140], ['Veg Manchurian Rice', 100, 160],
    ['Veg Paneer Rice', 140, 200], ['Veg Garlic Rice', 100, 160],
    ['Veg Pepper Rice', 90, 140], ['Veg Chilli Rice', 90, 140],
    ['Veg Hong Kong Rice', 120, 170], ['Veg Singapore Rice', 120, 170],
    ['Veg Malaysian Rice', 120, 170], ['Veg Szechuan Rice', 110, 160],
  ]],
  ['Fried Rice', 'Non-Veg', 'rice', [
    ['Chicken Fried Rice', 100, 170], ['Chicken Manchurian Rice', 150, 230],
    ['Chicken Garlic Rice (Must Try)', 140, 210], ['Chicken Pepper Rice', 120, 170],
    ['Chicken Chilli Rice', 150, 230], ['Chicken Hong Kong Rice', 160, 230],
    ['Chicken Singapore Rice', 160, 290], ['Chicken Malaysian Rice', 160, 290],
    ['Chicken Szechuan Rice (Must Try)', 170, 280], ['Egg Fried Rice', 90, 150],
    ['Double Egg Fried Rice', 100, 160], ['Double Egg Chicken Fried Rice', 110, 190],
    ['Double Egg Double Chicken Fried Rice', 150, 260],
  ]],
  ['Biryani', 'Non-Veg', 'biryani', [
    ['Chicken Biryani', 130], ['Chicken 65 Biryani', 160],
    ['Chicken Lollipop Biryani', 160], ['Chicken Chilli Biryani', 170],
    ['Chicken Fry Biryani', 160],
  ]],
  // The menu lists no diet for these two add-ons, so none is shown.
  ['Biryani', null, 'biryani', [
    ['Extra Piece - Biryani', 70, undefined, 'flat'], ['Extra Rice - Biryani', 80, undefined, 'flat'],
  ]],
];

function priceLabel(category, first, second, mode) {
  if (mode === 'flat') return `₹${first}`;
  const labels = category in PORTIONS ? PORTIONS[category] : DEFAULT_PORTIONS;
  if (!labels) return `₹${first}`;
  if (second == null) return `${labels[0]} ₹${first}`;
  return `${labels[0]} ₹${first} · ${labels[1]} ₹${second}`;
}

// Numeric price points (INR) for structured data. Mirrors priceLabel().
function offersFor(category, first, second, mode) {
  if (mode === 'flat') return [{ label: null, price: first }];
  const labels = category in PORTIONS ? PORTIONS[category] : DEFAULT_PORTIONS;
  if (!labels) return [{ label: null, price: first }];
  const out = [{ label: labels[0], price: first }];
  if (typeof second === 'number') out.push({ label: labels[1], price: second });
  return out;
}

export const MENU_ITEMS = groups.flatMap(([category, diet, image, dishes]) =>
  dishes.map(([name, first, second, mode]) => {
    const photo = photoBySlug[slugify(name)];
    return {
      name, category, diet,
      image: photo ?? FOOD_IMAGES[image],
      actual: Boolean(photo),
      price: priceLabel(category, first, second, mode),
      offers: offersFor(category, first, second, mode),
    };
  })
);