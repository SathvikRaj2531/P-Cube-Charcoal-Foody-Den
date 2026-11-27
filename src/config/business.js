// Single source of truth for business facts. Used by the UI, SEO metadata and JSON-LD.
// Anything marked "owner to confirm" in the audit report should be verified before relying on it.
export const BUSINESS = Object.freeze({
  name: 'P Cube Charcoal Foody Den',
  streetAddress: 'FFPR+6PW, Dairy Farm Rd, Sai Nagar, Indira Nagar, Old Bowenpally',
  locality: 'Secunderabad',
  region: 'Telangana',
  postalCode: '500015',
  country: 'IN',
  address: 'FFPR+6PW, Dairy Farm Rd, Sai Nagar, Indira Nagar, Old Bowenpally, Secunderabad, Telangana 500015',
  geo: { latitude: 17.4856035, longitude: 78.4918059 },
  hours: '01:30 PM to 11:30 PM',
  opens: '13:30',
  closes: '23:30',
  phone: '+91 9705380806',
  phoneHref: 'tel:+919705380806',
  whatsapp: 'https://wa.me/919705380806',
  // UNVERIFIED social URLs. Hidden on the site and excluded from JSON-LD sameAs until SOCIAL_VERIFIED is set to true.
  instagram: 'https://www.instagram.com/sathvik_rajpvt/',
  facebook: 'https://www.facebook.com/profile.php?id=61590831953756',
  maps: 'https://maps.google.com/?q=P+Cube+Charcoal+Foody+Den+Secunderabad',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=17.4856035%2C78.4918059',
});

// Set to true only after the owner confirms these are the official restaurant profiles.
export const SOCIAL_VERIFIED = false;
// Owner has confirmed the supplied images are genuine photographs of the restaurant and its dishes.
export const PHOTOS_CONFIRMED = true;
