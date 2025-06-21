import { Tomorrow, Geist_Mono, Geist } from 'next/font/google';

const tomorrow = Tomorrow({
  variable: '--font-tomorrow',
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export { tomorrow, geistSans, geistMono };
