import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Find Gigs | Job Board',
  description: 'jobs|gigs|findwork',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#F2F7FB]`}>
        <Navbar />
        {/* Adjust for larger screens */}
        <main className='xl:mx-auto'>{children}</main>
      </body>
    </html>
  );
}
