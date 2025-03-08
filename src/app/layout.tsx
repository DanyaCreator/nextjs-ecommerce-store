import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

// eslint-disable-next-line import/no-internal-modules
import '../styles/globals.css';

import { BagProvider } from './provider/bag-provider';
import { ModalProvider } from './provider/modal-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SHOPPE',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
};

// TODO: merge dashboard into this repo
// TODO: Add enum for routes.ts
// TODO: Refactor FSD
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ModalProvider />
        <BagProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
