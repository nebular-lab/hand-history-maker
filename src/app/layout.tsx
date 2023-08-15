import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';


export const metadata: Metadata = {
  title: 'History Image Generator',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="ja">
      <body className='flex justify-center'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
