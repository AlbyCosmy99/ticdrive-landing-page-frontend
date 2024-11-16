import React from 'react';
import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';
import Image from 'next/image';

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
  
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1290204491971799');
            fbq('track', 'PageView');
          `}
        </Script>
        
        {/* Hotjar Tracking Code for Site TicDrive */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5210314,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        
        <noscript>
          <Image 
            height={1} 
            width={1} 
            style={{ display: 'none' }} 
            src="https://www.facebook.com/tr?id=1290204491971799&ev=PageView&noscript=1" 
            alt="Facebook Pixel Noscript Tracking"
            unoptimized 
          />
        </noscript>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
};

export default React.memo(RootLayout);
