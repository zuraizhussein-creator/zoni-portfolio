import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { seo, profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

// Basic SEO: the title and description search engines and social sites show
export const metadata = {
  title: seo.title,
  description: seo.description,
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#101827",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
