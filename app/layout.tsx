import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BrainOn - Immersive Study Experience',
  description:
    'A web app for any academic learners providing an online immersive study experience for personal, interactive group discussions and tutoring sessions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
