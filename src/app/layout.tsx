import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeToggle";
import SiteHeader from "@/components/SiteHeader";
import ProgressBar from "@/components/ProgressBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero Handwritten Mocks: API Testing for Go | Keploy × Gin + MongoDB Tutorial",
  description:
    "A hands-on, beginner-friendly walkthrough: record real HTTP + MongoDB traffic from a Gin URL-shortener with Keploy, then replay it as a self-mocking test suite.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <ProgressBar />
        <SiteHeader />
        {children}
        <footer className="border-t border-border py-8 text-center text-sm text-muted">
          Built for the Keploy DevRel assessment · Next.js + MDX + Tailwind ·
          Content authored in{" "}
          <code className="rounded bg-foreground/10 px-1.5 py-0.5 font-mono text-[0.85em]">
            page.mdx
          </code>
        </footer>
      </body>
    </html>
  );
}
