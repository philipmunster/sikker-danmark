import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Navigation from '@/app/components/Navigation'
import OfflineToast from "./components/OfflineToast";

const geistSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased h-screen flex flex-col'>
        <Header />
        <OfflineToast />
        <Navigation />
        <main className="grow">
          {children}
        </main> 
        <Footer />
      </body>
    </html>
  );
}
