import type React from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: 'BetterTrails - Accelerating Clinical Trials for Hospitals',
  description: 'A secure, hospital-focused platform that simplifies clinical trial onboarding and helps doctors identify eligible patients.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
