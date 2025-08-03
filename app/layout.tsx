import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Krishal Basnet",
    template: "%s | Krishal - Software Developer",
  },
  description:
    "Krishal is a passionate software developer specializing in full-stack web development. Expert in React, Node.js, Python, and cloud platforms. Available for freelance projects.",
  keywords: [
    "software developer",
    "full stack developer",
    "web developer",
    "React developer",
    "Node.js developer",
    "Python developer",
    "freelance developer",
    "portfolio",
    "Krishal",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "cloud computing",
    "API development",
    "responsive design",
    "UI/UX",
    "database design",
    "microservices",
    "DevOps",
  ],
  authors: [{ name: "Krishal", url: "https://krishal.dev" }],
  creator: "Krishal",
  publisher: "Krishal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://krishal.dev"), // Added for better URL handling
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishal.dev",
    title: "Krishal - Software Developer | Full Stack Developer Portfolio",
    description:
      "Passionate software developer specializing in full-stack web development. Expert in React, Node.js, Python, and cloud platforms.",
    siteName: "Krishal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Krishal - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishal - Software Developer | Full Stack Developer Portfolio",
    description:
      "Passionate software developer specializing in full-stack web development. Expert in React, Node.js, Python, and cloud platforms.",
    images: ["/og-image.jpg"],
    creator: "@krishal_dev",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://krishal.dev",
    languages: {
      "en-US": "https://krishal.dev", // Explicitly set English as the only language
    },
  },
  category: "technology",
  generator: "v0.dev",
  other: {
    "google-site-verification": "your-google-verification-code", // Alternative verification
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      {" "}
      {/* Explicitly set text direction */}
      <head>
        {/* Language and Translation Controls */}
        <meta http-equiv="Content-Language" content="en" />
        <meta name="google" content="notranslate" />
        <meta name="language" content="English" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/k.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and Viewport */}
        <meta name="theme-color" content="#E8E0D4" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Krishal",
              jobTitle: "Software Developer",
              description:
                "Full Stack Software Developer specializing in React, Node.js, Python, and cloud platforms",
              url: "https://krishal.dev",
              sameAs: [
                "https://linkedin.com/in/krishal",
                "https://github.com/krishal",
                "https://twitter.com/krishal_dev",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Next.js",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Full Stack Development",
                "Web Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Software Developer",
                occupationLocation: {
                  "@type": "Place",
                  name: "Remote",
                },
              },
              inLanguage: "en-US", // Explicitly set language for schema
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono`}>{children}</body>
    </html>
  );
}
