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
      <body className={inter.className}>
        <Navbar />
        <main className="relative h-screen py-24 overflow-x-hidden overflow-y-scroll bg-gray-900 min-h-max isolate sm:py-32">
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
