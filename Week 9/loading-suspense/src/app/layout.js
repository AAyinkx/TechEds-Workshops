import localFont from "next/font/local";
import "./globals.css";
import NavbarTwo from "@/Components/NavbarTwo";

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
  title: "Suspense and Loading",
  description: "Creating a loading state for my site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-center mt-4 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarTwo />
        {children}
      </body>
    </html>
  );
}
