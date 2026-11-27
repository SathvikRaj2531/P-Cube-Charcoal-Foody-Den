// React Router v7 Framework Mode, static prerendering (SSG).
// `ssr: false` + `prerender` => every listed path is rendered to real HTML at
// build time (build/client/<path>/index.html). No server is needed at runtime.
export default {
  appDirectory: 'src',
  ssr: false,
  prerender: ['/', '/about', '/menu', '/gallery', '/reviews', '/contact', '/restaurant-information', '/404'],
};
