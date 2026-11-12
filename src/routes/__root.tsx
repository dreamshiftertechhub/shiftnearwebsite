import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Dreamshifter Tech Hub — We design. We build. We move ideas forward." },
      { name: "description", content: "Digital product design, web development, business technology solutions and practical tech training from Dreamshifter Tech Hub." },
      { name: "theme-color", content: "#17243A" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600;700;800&display=swap" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body><PreviewHostBridge /><AuthProvider><Outlet /></AuthProvider><Scripts /></body>
    </html>
  ),
});
