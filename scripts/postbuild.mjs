// After `react-router build`: expose the prerendered /404 page as 404.html, which
// static hosts (Vercel, Netlify, GitHub Pages) serve for unknown URLs.
import { copyFile, access, rm } from 'node:fs/promises';
const dir = new URL('../build/client/', import.meta.url);
// __spa-fallback.html is an empty app shell React Router emits for ssr:false builds.
// Every public URL is prerendered and unknown URLs get 404.html, so nothing should serve it.
await rm(new URL('__spa-fallback.html', dir), { force: true });
try {
  await access(new URL('404/index.html', dir));
  await copyFile(new URL('404/index.html', dir), new URL('404.html', dir));
  console.log('postbuild: build/client/404.html written');
} catch {
  console.error('postbuild: build/client/404/index.html missing');
  process.exit(1);
}
