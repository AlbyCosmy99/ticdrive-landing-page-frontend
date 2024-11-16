"use client";

import NavBar from './components/Navbar';
import SignUpButton from './components/SignUpButton';
import Link from 'next/link';
import { useState } from 'react';
import RegistrationConfirmation from './components/RegistrationConfirmation';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Footer from './components/Footer';
import Section5 from './components/sections/Section5';
import Section4 from './components/sections/Section4';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState("");
  const [progressIsVisible, setProgressIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://landing-page-users-ticdrive-backend.onrender.com/api/mail/confirmation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      setLoading(false);
      
      if (data.confirmed) {
        setProgressIsVisible(true);
        sessionStorage.setItem('token', data.token);
      } else {
        router.replace('mail/subscription-sent');
      }
    } catch (error) {
      console.error("Failed to send email confirmation:", error);
      setLoading(false);
    }
  };

  const handleBannerClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'banner_promo', {
        event_category: 'Banner',
        event_label: '15% Discount Banner',
        iat: new Date()
      });
    } else {
      console.warn("Google Analytics 'gtag' not initialized.");
    }
  };  

  const handleGoogleAnalyticsEmailClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_input_click', {
        event_category: 'Email Input',
        event_label: 'Clicked on email input',
        iat: new Date()
      });
    } else {
      console.warn("Google Analytics 'gtag' not initialized.");
    }
  };  

  const handleGoogleAnalyticsEmailChange = (typing: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_typing', {
        event_category: 'Email Typing',
        event_label: 'Typing on email input',
        typing,
        iat: new Date()
      });
    } else {
      console.warn("Google Analytics 'gtag' not initialized.");
    }
  };  

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    handleGoogleAnalyticsEmailChange(e.target.value);
  };
  
  return (
    <>
      {/* Primo banner */}
    <div
      style={{ borderTop: '1px solid white', height: '2.5rem' }}
      className="w-full bg-red-500 text-white font-bold text-sm text-center p-2 flex justify-evenly items-center fixed top-0 z-50"
      role="banner"
      aria-label="Banner offering 15% discount on first booking"
      onClick={handleBannerClick}
    >
      <Link href="#registrati" passHref className="flex justify-evenly w-full h-5">
        <p className="hidden lg:block" aria-hidden="true">Sconto del 15% sulla tua prima prenotazione!</p>
        <p>Sconto del 15% sulla tua prima prenotazione!</p>
        <p className="hidden lg:block" aria-hidden="true">Sconto del 15% sulla tua prima prenotazione!</p>
      </Link>
    </div>
    {/* Secondo banner */}
    <div
      style={{ height: '2.5rem', top: '2.5rem' }} 
      className="w-full bg-yellow-500 text-white font-bold text-sm text-center lg:p-2 lg:items-center flex justify-evenly  fixed z-50"
      role="banner"
      aria-label="Free waiting list banner"
      onClick={handleBannerClick}
    >
      <Link href="#registrati" passHref className="flex justify-evenly w-full h-5">
        <p className="hidden lg:block" aria-hidden="true">Entra gratuitamente nella lista d&apos; attesa per vantaggi esclusivi!</p>
        <p>Entra gratuitamente nella lista d&apos; attesa per vantaggi esclusivi!</p>
        <p className="hidden lg:block" aria-hidden="true">Entra gratuitamente nella lista d&apos; attesa per vantaggi esclusivi!</p>
      </Link>
    </div>

    <div style={{ paddingTop: '5rem' }}>
        <NavBar />
      </div>
      <Section1 />
      <Section2 />

      {/* Registration Section */}
      <section
        id="registrati"
        className={`bg-drive w-full h-100 flex flex-col justify-center items-center p-8 ${progressIsVisible && 'lg:pb-10'} lg:p-20 lg:pr-80 gap-6 lg:pl-40`}
        aria-labelledby="signup-heading"
      >
        <h2 id="signup-heading" className="text-white text-3xl lg:text-4xl font-bold lg:pr-40">
          Iscriviti gratuitamente alla nostra newsletter per ottenere l&apos; accesso anticipato e uno sconto speciale del 15% sulla tua prima prenotazione.
        </h2>
        <form
          className="flex flex-col items-start self-start gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            fetchData();
            setEmail("");
            setPrivacyAccepted(false);
          }}
          aria-live="polite"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 items-start self-start">
            <label htmlFor="email" className="sr-only">Inserisci la tua email</label>
            <input
              id="email"
              placeholder="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="h-fit w-80 p-4 rounded-3xl h-full"
              required
              aria-required="true"
              onClick={handleGoogleAnalyticsEmailClick}
            />
            <SignUpButton revertStyle={true} aria-label="Iscriviti gratuitamente alla newsletter" />
          </div>
          <label className="text-white flex items-center gap-2" htmlFor="privacy">
            <input
              id="privacy"
              type="checkbox"
              name="privacy"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
              aria-required="true"
            />
            <div>
              Accetto la <a href="https://www.iubenda.com/privacy-policy/25498782/legal" className="underline">Privacy Policy</a> e i <a href="https://www.iubenda.com/privacy-policy/25498782/cookie-policy" className="underline">Cookie Policy</a>.
            </div>
          </label>
        </form>

        {loading && !progressIsVisible && (
          <div role="status" className="flex w-full">
            <div className="flex-1 flex justify-center items-center">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#737373"/>
              </svg>
            </div>
            <div className="flex-1 hidden lg:block"></div>
          </div>
        )}

        {progressIsVisible && (
          <div className="relative w-full">
            <div aria-live="assertive" aria-label="Registration Confirmation">
              <RegistrationConfirmation setProgressIsVisible={setProgressIsVisible}/>
            </div>
            <button className="absolute top-2 right-3 text-tic cursor-pointer" onClick={() => setProgressIsVisible(false)} aria-label="Close confirmation">
              X
            </button>
          </div>
        )}
      </section>

      <Section4 />
      <Section5 />
      <hr className="bg-white w-full" aria-hidden="true" />
      <Footer />
    </>
  );
}
