import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/navbar/footer";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tunji Oyeniran - Home",
  description:
    "Tunji Oyeniran is a Senior Fullstack Engineer who loves building useful mobile friendly applications using React, Vue, Node JS, Laravel and other modern technologies.",
  icons: [
    {
      url: "/favicon/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      url: "/favicon/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className="color-primary">
          <ThemeProvider attribute="class">
            <Toaster position="top-center" />
            <main
              className={`${noto.className} relative bg-neutral-100 antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-neutral-100)]/5 color-foreground`}
            >
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
