import './globals.css';
import { Inter } from 'next/font/google';

import BackgroundDark from './components/BackgroundDark';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Concentration - The Game',
  description: 'Made to play'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden overflow-y-scroll`}>
        <Navbar />
        <main className="min-h-screen py-20 bg-gray-900 h-fit sm:py-24">
          <div className="relative px-6 isolate pt-14 lg:px-8">
            <BackgroundDark />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
