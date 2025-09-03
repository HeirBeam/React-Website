// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import NavLink from "./components/NavLink";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibraheem Sharif — Developer",
  description: "I build apps and Unity games.",
  metadataBase: new URL("https://heirbeam.dev"),
  openGraph: {
    title: "Ibraheem Sharif — Developer",
    description: "Apps and Unity WebGL projects at heirbeam.dev",
    url: "https://heirbeam.dev",
    siteName: "heirbeam.dev",
    images: [{url: "/og.jpg?v=1", width: 1200, height: 630, alt: "Ibraheem Sharif - heirbeam.dev"},],
    locale: "en_GB",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip link for keyboard users */}
        <a href="#main" className="sr-only focus:not-sr-only p-2 underline">
          Skip to content
        </a>

        {/* Page header + primary nav */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
  <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
    <Link href="/" className="font-semibold tracking-tight">Ibraheem Sharif</Link>
    <div className="flex gap-4">
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/about" exact>About</NavLink>
      <NavLink href="/contact" exact>Contact</NavLink>
    </div>
  </nav>
</header>

        {/* Main content area (one per page) */}
        <main id="main" className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </main>

        {/* Page footer */}
        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-600 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Ibraheem Sharif</span>
            <div className="flex gap-4">
              <a href="https://github.com/HeirBeam" className="hover:underline">
                GitHub
              </a>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

