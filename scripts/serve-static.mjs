// Tiny static server for build/client that behaves like a real static host:
// /about -> about/index.html, unknown paths -> 404.html (status 404). No SPA rewrite.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../build/client');
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml', '.data': 'text/x-script' };

async function resolveFile(urlPath) {
  const clean = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  for (const candidate of [clean, path.join(clean, 'index.html')]) {
    const full = path.join(root, candidate);
    if (!full.startsWith(root)) continue;
    try { if ((await stat(full)).isFile()) return full; } catch { /* next */ }
  }
  return null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://x');
  let file = await resolveFile(pathname);
  let status = 200;
  if (!file) { file = path.join(root, '404.html'); status = 404; }
  try {
    res.writeHead(status, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch { res.writeHead(500); res.end('error'); }
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
