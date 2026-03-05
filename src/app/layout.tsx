import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPS Professional Cleaning | Premium Commercial Cleaning Services",
  description:
    "Estonia's premier commercial cleaning partner. Trusted by leading corporations to maintain spotless environments that inspire productivity. Office, industrial, retail, and specialized cleaning services.",
  keywords: [
    "commercial cleaning",
    "office cleaning",
    "corporate cleaning",
    "Estonia",
    "professional cleaning",
    "industrial cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0f172a]">
        <div className="max-w-[1280px] mx-auto bg-bg-primary overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]">
          {children}
        </div>
      </body>
    </html>
  );
}
