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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AA Cold Storages | Complete Cooling Solutions Bengaluru" },
      {
        name: "description",
        content:
          "AACS provides customized cold rooms, walk-in chillers, freezer rooms, ripening chambers, blast freezer rooms, insulated panels, HVAC and refrigeration services for commercial and industrial businesses in Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "AA Cold Storages, AACS, cold storage Bengaluru, walk-in chiller, blast freezer room, ripening chamber, PUF insulated panels, industrial refrigeration equipment, turnkey cold storage plant, cold chain solutions India",
      },
      { name: "author", content: "AACS — AA Cold Storages" },
      { property: "og:site_name", content: "AA Cold Storages" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "AA Cold Storages — Complete Cooling Solutions" },
      {
        property: "og:description",
        content:
          "Customized industrial and commercial cold storage solutions, PUF panels, ripening chambers, blast freezers and AMC support in Bengaluru, Karnataka.",
      },
      { property: "og:image", content: "/MainLogo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AA Cold Storages — Complete Cooling Solutions" },
      {
        name: "twitter:description",
        content:
          "Customized industrial and commercial cold storage solutions, PUF panels, ripening chambers, blast freezers and AMC support.",
      },
      { name: "twitter:image", content: "/MainLogo.png" },
    ],
    links: [
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
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
      <MobileActions />
    </QueryClientProvider>
  );
}
