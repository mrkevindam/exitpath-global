import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExitPath Global | Strategic Exit Advisory for SME Founders',
  description:
    'ExitPath Global helps founders unlock the full value of their business through strategic exit advisory, saleability scoring, and value enhancement.',
  keywords:
    'business exit, founder advisory, SME acquisition, Singapore business brokerage, exit planning',
  openGraph: {
    title: 'ExitPath Global',
    description:
      'Strategic Exit Advisory for SME Founders - Clear preparation. Sharp positioning. Precise deal execution.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'var(--font-jost)', color: '#3D3D3D' }}>{children}</body>
    </html>
  );
}
