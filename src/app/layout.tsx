import React from 'react';
import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TicDrive',
  description: 'Trova la Migliore Officina Vicino a Te in Pochi Click: Confronta i prezzi, leggi le recensioni e prenota facilmente e in modo trasparente i servizi di manutenzione e riparazione auto.',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CEHL3QKF3T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CEHL3QKF3T');
          `}
        </Script>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
};

export default React.memo(RootLayout);
