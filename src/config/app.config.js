export const APP_CONFIG = {
  "name": "P Cube Charcoal Foody Den",
  "tagline": "Soups, starters, noodles, fried rice and biryani",
  "emoji": "🔥",
  "icon": "Flame",
  "defaultTheme": "dark"
};

export const AUTH_PROFILES = [
  { key: 'owner', name: 'CEO', label: 'Owner', profileSlug: '|y3JIBBlTyD2XqTOfVKr5Ir9f17Mt0dOFGhyPBVz+X7c=', redirectAfterAuth: '/dashboard', authPage: { loginTitle: 'Owner staff login' }, altLinks: [{ to: '/manager/login', label: 'Manager' }, { to: '/chef/login', label: 'Chef' }, { to: '/waiter/login', label: 'Waiter' }] },
  { key: 'manager', name: 'Manager', label: 'Manager', profileSlug: '|y3JIBBlTyD2XqTOfVKr5IqdoC7AexMPGQtHnmn2oUXU=', redirectAfterAuth: '/dashboard', authPage: { loginTitle: 'Manager staff login' }, altLinks: [{ to: '/owner/login', label: 'Owner' }, { to: '/chef/login', label: 'Chef' }, { to: '/waiter/login', label: 'Waiter' }] },
  { key: 'chef', name: 'Chef_c', label: 'Chef', profileSlug: '|AmZNHRlPBRB6/IyeRoPX68zvqIGWPNTLtJCHbPxHsqc=', redirectAfterAuth: '/dashboard', authPage: { loginTitle: 'Kitchen staff login' }, altLinks: [{ to: '/owner/login', label: 'Owner' }, { to: '/manager/login', label: 'Manager' }, { to: '/waiter/login', label: 'Waiter' }] },
  { key: 'waiter', name: 'Waiter_c', label: 'Waiter', profileSlug: '|AmZNHRlPBRB6/IyeRoPX62c2W1AeefK6miW3mZ0RKN8=', redirectAfterAuth: '/dashboard', authPage: { loginTitle: 'Waiter staff login' }, altLinks: [{ to: '/owner/login', label: 'Owner' }, { to: '/manager/login', label: 'Manager' }, { to: '/chef/login', label: 'Chef' }] },
];

export const GENERIC_AUTH = {
  "loginTitle": "Welcome back",
  "signupTitle": "Create account",
  "loginDescription": null,
  "signupDescription": null,
  "redirectAfterAuth": "/dashboard"
};
