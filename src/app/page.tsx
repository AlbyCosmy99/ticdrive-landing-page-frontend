"use client"

import NavBar from './components/Navbar';
import SignUpButton from './components/SignUpButton';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
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
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const router = useRouter()

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    fetch(`https://landing-page-users-ticdrive-backend.onrender.com/api/mail/confirmation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setLoading(false);
      if(res.confirmed) {
        setProgressIsVisible(true);
      } else {
        router.push('mail/subscription-sent')
      }
    });
  };

  return (
    <>
      <hr className="bg-white w-full" />
      <div
        ref={bannerRef}
        className=" w-full bg-red-500 text-white font-bold text-sm text-center p-2 flex justify-evenly items-center fixed top-0 z-50"
      >
        <Link href="#registrati" passHref className='flex justify-evenly w-full h-5'>
          <p className='hidden lg:block'>Sconto del 15% sulla tua prima prenotazione!</p>
          <p>Sconto del 15% sulla tua prima prenotazione!</p>
          <p className='hidden lg:block'>Sconto del 15% sulla tua prima prenotazione!</p>
        </Link>
      </div>

      <div style={{ paddingTop: bannerHeight }}>
        <NavBar />
      </div>
      <Section1 />
      <Section2 />
      
      <section
        id="registrati"
        className={`bg-drive w-full h-100 flex flex-col justify-center items-center p-8 ${progressIsVisible && 'lg:pb-10'} lg:p-20 lg:pr-80 gap-6 lg:pl-40`}
      >
        <p className="text-white text-3xl lg:text-4xl font-bold lg:pr-40">
          Iscriviti ora per ottenere l&apos; accesso anticipato e ricevere uno
          sconto speciale del 15% sulla tua prima prenotazione.
        </p>
        <form
          className="flex flex-col items-start self-start gap-3"
          onSubmit={(event) => {
            event.preventDefault()
            fetchData()
            setEmail("")
            setPrivacyAccepted(false)
          }}
        >
         <div className='flex flex-col lg:flex-row lg:items-center gap-2 items-start self-start'>
          <input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-fit w-80 p-4 rounded-3xl h-full"
              required
            />
            <SignUpButton revertStyle={true} />
         </div>
          <label className="text-white flex items-center gap-2">
              <input 
                type="checkbox" 
                name="privacy" 
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required />
              <div>
                  Accetto la <a href="https://www.iubenda.com/privacy-policy/25498782/legal" className="underline">Privacy Policy</a> e i <a href="https://www.iubenda.com/privacy-policy/25498782/cookie-policy" className="underline">Cookie Policy</a>.
              </div>
          </label>
        </form>
        {
          loading && !progressIsVisible && (
          <div role="status" className='flex justify-center items-center'>
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#737373"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          )
        }
        {
          progressIsVisible && (
            <div className='relative w-full'>
              <div className=''>
                <RegistrationConfirmation setProgressIsVisible={setProgressIsVisible}/>
              </div>
              <div className='absolute top-2 right-3 text-tic cursor-pointer' onClick={() => setProgressIsVisible(false)}>
                X
              </div>
            </div>
          )
        }
      </section>
      <Section4 />
      <Section5 />
      <hr className="bg-white w-full" />
      <Footer />
    </>
  );
}
