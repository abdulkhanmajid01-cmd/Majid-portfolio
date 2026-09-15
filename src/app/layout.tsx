import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abdul Majid Khan — Full-Stack Developer",
    template: "%s — Abdul Majid Khan",
  },
  description:
    "Abdul Majid Khan is a Full-Stack Developer building scalable web applications, SaaS platforms, AI-powered systems and production websites.",
  keywords: [
    "Full-Stack Developer",
    "SaaS Developer",
    "AI Developer",
    "RAG",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Web Development",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Abdul Majid Khan — Full-Stack Developer",
    description:
      "Abdul Majid Khan is a Full-Stack Developer building scalable web applications, SaaS platforms, AI-powered systems and production websites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Majid Khan — Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable web applications, SaaS platforms, AI-powered systems and production websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090B",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer building scalable web applications, SaaS platforms, AI-powered systems and production websites.",
  knowsAbout: [
    "Full-Stack Development",
    "SaaS",
    "Artificial Intelligence",
    "RAG",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Databases",
    "Automation",
  ],
  sameAs: [site.github, site.linkedin],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description:
    "Portfolio of Abdul Majid Khan, Full-Stack Developer building scalable web applications, SaaS platforms, AI-powered systems and production websites.",
  author: {
    "@type": "Person",
    name: site.name,
    url: site.github,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}