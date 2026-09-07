import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import Footer from "./(site)/_components/footer";
import Header from "./(site)/_components/header";
import { JsonLd } from "./(site)/_components/json-ld";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = `${site.nom} · ${site.ecole}, ${site.ville}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s · ${site.nom}`,
  },
  description: site.description,
  applicationName: site.nom,
  authors: [{ name: site.nom, url: site.url }],
  creator: site.nom,
  publisher: site.nom,
  category: "sports",
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.nom,
    url: site.url,
    title: defaultTitle,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.nom,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="dark min-h-full flex flex-col bg-black">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
