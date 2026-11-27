import { Links, Meta, Outlet, Scripts, isRouteErrorResponse } from 'react-router';
import { Toaster } from 'sonner';
import './index.css';
import { APP_CONFIG } from '@/config/app.config';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary as AppErrorBoundary } from '@/components/ui/error-boundary';

// Dark-only site: force the dark class before first paint (also set in the prerendered <html>).
const THEME_BOOT = `document.documentElement.classList.add('dark');`;

export function Layout({ children }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#15100D" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <AppErrorBoundary fullPage>
          <Outlet />
        </AppErrorBoundary>
        <Toaster position="top-right" richColors closeButton duration={3000} />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }) {
  const status = isRouteErrorResponse(error) ? error.status : 500;
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <h1 className="font-heading text-3xl">{status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
      <a href="/" className="mt-6 underline underline-offset-4">Go home</a>
    </div>
  );
}
