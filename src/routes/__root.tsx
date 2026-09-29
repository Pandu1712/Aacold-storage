import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { MobileActions, SiteFooter, SiteHeader } from "@/components/site-shell";
import { Toaster } from "@/components/ui/sonner";
import {
  organizationSchema,
  websiteSchema,
  siteNavigationSchema,
  faqSchema,
  siteUrl,
} from "@/lib/seo-schemas";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "AA Cold Storages | Complete Cooling Solutions Bengaluru" },
      {
        name: "description",
        content:
          "AA Cold Storages (AACS) Bengaluru: Manufacturer & turnkey contractor for cold storage rooms (2T-100T+), walk-in chillers (+2°C), walk-in freezers (-18°C), blast freezers, ripening chambers, PUF panels (₹250/sq.ft) and AMC services across Karnataka.",
      },
      {
        name: "keywords",
        content:
          "AA Cold Storages, AACS, AA Cold Storage, AA Cold Storage Bengaluru, cold storage room Bengaluru, walk-in chiller price, walk-in freezer room, banana ripening chamber, blast freezer manufacturer, PUF insulated panels ₹250, clean room panels, refrigeration AMC Karnataka, cold chain warehousing India",
      },
      { name: "author", content: "AA Cold Storages" },
      { name: "publisher", content: "AA Cold Storages" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "bingbot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "geo.region", content: "IN-KA" },
      { name: "geo.placename", content: "Bengaluru, Karnataka, India" },
      { name: "geo.position", content: "12.8906;77.5855" },
      { name: "ICBM", content: "12.8906, 77.5855" },
      { name: "theme-color", content: "#0050A7" },
      { name: "application-name", content: "AA Cold Storages" },
      { name: "apple-mobile-web-app-title", content: "AA Cold Storages" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "format-detection", content: "telephone=no" },
      { name: "google-site-verification", content: "c4d0cd1dab6b13b7" },
      { property: "og:site_name", content: "AA Cold Storages" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: siteUrl },
      { property: "og:title", content: "AA Cold Storages | Complete Cooling Solutions Bengaluru" },
      {
        property: "og:description",
        content:
          "Customized industrial and commercial cold storage solutions, PUF panels, ripening chambers, blast freezers and AMC support in Bengaluru, Karnataka.",
      },
      { property: "og:image", content: `${siteUrl}/MainLogo.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AA Cold Storages Complete Cooling Solutions Bengaluru" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AA Cold Storages | Complete Cooling Solutions Bengaluru" },
      {
        name: "twitter:description",
        content:
          "Customized industrial and commercial cold storage solutions, PUF panels, ripening chambers, blast freezers and AMC support in Bengaluru.",
      },
      { name: "twitter:image", content: `${siteUrl}/MainLogo.png` },
      { name: "twitter:image:alt", content: "AA Cold Storages Bengaluru Logo" },
    ],
    links: [
      {
        rel: "canonical",
        href: siteUrl,
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "sitemap",
        type: "application/xml",
        title: "Sitemap",
        href: "/sitemap.xml",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&family=Caveat:wght@600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(siteNavigationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" richColors />
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
      <MobileActions />
    </QueryClientProvider>
  );
}
