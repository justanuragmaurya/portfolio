import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const font = Poppins({
  subsets: ['latin'],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
})

export const metadata: Metadata = {
  title: "Anurag Maurya",
  description: "Fullstack Developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Providers>
          {children}
          <Toaster/>
          <Analytics/>
        </Providers>
      </body>
    </html>
  );
}
