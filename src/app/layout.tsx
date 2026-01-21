import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BSDEVELOPER - Softhouse Inovadora',
  description:
    'Desenvolvimento de software com inteligencia artificial. Sites, sistemas, apps e muito mais.',
  keywords: [
    'desenvolvimento',
    'software',
    'web',
    'app',
    'sistema',
    'capivari de baixo',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
