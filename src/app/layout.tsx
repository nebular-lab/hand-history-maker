import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';

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
      <body className="flex justify-center">
        <Providers>{children}</Providers>
        <Analytics/>
      </body>
    </html>
  );
}
