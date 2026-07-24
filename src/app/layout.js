import { Inter, Libre_Baskerville } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SchemaOrg from "@/components/SchemaOrg";
import GoogleTagManager from "@/components/GoogleTagManager";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

export const viewport = {
  themeColor: "#f5f5f5",
};

export const metadata = {
  metadataBase: new URL("https://www.kit.darioevaristobellotta.de"),
  title: {
    default: "Next.js Developer Kit by Dario Evaristo Bellotta",
    template: "%s | Dario Evaristo Bellotta",
  },
  description: "Minimalistisches Next.js Grundgerüst von Dario Evaristo Bellotta für schnelle, moderne Webanwendungen.",
  authors: [{ name: "Dario Evaristo Bellotta", url: "https://darioevaristobellotta.de" }],
  icons: {
    icon: [
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  openGraph: {
    url: "https://www.kit.darioevaristobellotta.de",
    type: "website",
    title: "Next.js Developer Kit by Dario Evaristo Bellotta",
    description: "Minimalistisches Next.js Grundgerüst von Dario Evaristo Bellotta für schnelle, moderne Webanwendungen.",
    locale: "de_DE",
    siteName: "Next.js Developer Kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Developer Kit by Dario Evaristo Bellotta",
    description: "Minimalistisches Next.js Grundgerüst von Dario Evaristo Bellotta für schnelle, moderne Webanwendungen.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <head>
        <SchemaOrg />
        <GoogleTagManager />

        {/* DNS Preconnect for Google Fonts & Icons CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Material Symbols Outlined Icons */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" 
        />
      </head>
      <body>
        <Header />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
