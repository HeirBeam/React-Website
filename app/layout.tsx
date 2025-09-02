// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YourName — Developer",
  description: "I build apps and Unity games.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "YourName — Developer",
    description: "I build apps and Unity games.",
    url: "https://your-domain.com",
    siteName: "YourName",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@yourhandle" },
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
          <nav
            aria-label="Primary"
            className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between"
          >
            <Link href="/" className="font-semibold tracking-tight">
              Ibraheem Sharif
            </Link>
            <div className="flex gap-4">
              <Link href="/projects" className="hover:underline">Projects</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
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

