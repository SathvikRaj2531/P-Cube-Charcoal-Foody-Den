import { index, layout, route } from '@react-router/dev/routes';

// Explicit route table (replaces the old import.meta.glob auto-discovery +
// createBrowserRouter). Only these public pages exist; each is prerendered.
export default [
  layout('layouts/PublicLayout.jsx', [
    index('pages/Home.jsx'),
    route('menu', 'pages/Menu/Menu.jsx'),
    route('about', 'pages/About.jsx'),
    route('gallery', 'pages/Gallery.jsx'),
    route('reviews', 'pages/Reviews.jsx'),
    route('contact', 'pages/Contact.jsx'),
    route('restaurant-information', 'pages/RestaurantInformation.jsx'),
  ]),
  route('*', 'pages/NotFound.jsx'),
];
