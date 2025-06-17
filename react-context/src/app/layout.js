import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Context",
  description: "Providing themes with context",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-center mt-10 place-content-center`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
