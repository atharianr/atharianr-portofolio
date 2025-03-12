import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Atharian Rahmadani | Android Developer, iOS Developer, Mobile Engineer, Software Engineer, AI Engineer",
  description:
    "Atharian Rahmadani is a Software Developer based in Surabaya, Indonesia. Specialized in Android Development, iOS Development, Mobile Engineer, Software Engineer, and Artificial Intelligence. Currently working at Axiata Digital Labs.",
  keywords: [
    "Atharian Rahmadani",
    "atharianr",
    "Android Developer",
    "iOS Developer",
    "Mobile Engineer",
    "Software Engineer",
    "AI Engineer",
    "Axiata Digital Labs",
    "Surabaya Developer",
    "Software Engineer Indonesia"
  ],
  authors: [{ name: "Atharian Rahmadani" }],
  creator: "Atharian Rahmadani",
  metadataBase: new URL("https://atharianr.dev"),
  openGraph: {
    title: "Atharian Rahmadani | Android Developer, iOS Developer, Mobile Engineer, Software Engineer, & AI Engineer",
    description:
      "Explore the portfolio of Atharian Rahmadani, an Android Developer, iOS Developer, Mobile Engineer, Software Engineer, and AI Enthusiast at Axiata Digital Labs.",
    url: "https://atharianr.dev",
    siteName: "atharianr.dev",
    images: [
      {
        url: "https://atharianr.dev/profile_pic.png", // ganti ke OG image kamu, need to add later
        width: 1200,
        height: 630,
        alt: "Atharian Rahmadani Portfolio - Android Developer, iOS Developer, Mobile Engineer, Software Engineer, and AI Enthusiast"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/atharianr_icon.svg",
    shortcut: "/atharianr_icon.svg",
    apple: "/atharianr_icon.svg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon & Icons */}
        <link rel="icon" href="/atharianr_icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/atharianr_icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/atharianr_icon.svg" />

        {/* Meta Theme (Optional, Good UX) */}
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Atharian Rahmadani",
              "alternateName": "atharianr",
              "url": "https://atharianr.dev",
              "image": "https://atharianr.dev/profile_pic.png",
              "jobTitle": "Android Developer, iOS Developer, Mobile Engineer, Software Engineer, AI Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Axiata Digital Labs"
              },
              "sameAs": [
                "https://github.com/atharianr",
                "https://linkedin.com/in/atharianr",
                "https://instagram.com/atharianr"
              ],
              "description":
                "Atharian Rahmadani is an Android Developer, iOS Developer, Mobile Engineer, Software Engineer, and AI Enthusiast currently working at Axiata Digital Labs."
            })
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
