"use client"

import NavBar from './components/Navbar';
import Group2 from '../../assets/group2.svg';
import Group2Mobile from '../../assets/group2mobile.svg';
import Group1 from '../../assets/mainGroup.svg';
import ServicesGroup from '../../assets/servicesGroup.svg';
import RegisterVehicleGroup from '../../assets/registerVehicleGroup.svg';
import WorkshopsGroup from '../../assets/workshopsGroup.svg';
import HalfServicesGroup from '../../assets/halfServicesGroup.svg';
import MiddleScreensGroup from '../../assets/middleScreensGroup.svg';

import SignUpButton from './components/SignUpButton';
import HowItWorksCard from './components/HowItWorksCard';
import Link from 'next/link';
import { useState } from 'react';
import RegistrationConfirmation from './components/RegistrationConfirmation';

export default function Home() {
  const [email, setEmail] = useState("")
  const [progressIsVisible, setProgressIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    fetch(`https://landing-page-users-ticdrive-backend.onrender.com/api/mail/subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    }).then(res => res.json())
    .then(res => {
      console.log(res)
      setLoading(false)
      setProgressIsVisible(true)
    })
  }
  return (
    <>
      {/* Promotional Banner */}
      <section
        id="top"
        className="h-full flex flex-col rounded-b-3xl min-h-screen"
        style={{backgroundColor: '#00BF63'}}
      >
        <NavBar />
        <Link href="#registrati" passHref>
          <div className="w-full bg-red-500 text-center p-2 text-white font-bold text-sm">
              <p>Sconto del 15% sulla tua prima prenotazione!</p>
          </div>
        </Link>
        <main className="flex flex-col justify-between items-center gap-4 lg:gap-2 flex-1 text-center text-white text-lg p-8 pb-0">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight lg:flex lg:justify-center lg:items-center lg:flex-col lg:gap-2">
              <span>Trova la Migliore Officina</span>{' '}
              <span>Vicino a Te in Pochi Click</span>
            </h1>
            <p className="mt-3 text-lg lg:text-xl">
              Confronta i prezzi, leggi le recensioni e prenota facilmente e in{' '}
              <br />
              modo trasparente i servizi di manutenzione e riparazione auto.
            </p>
          </div>
          <div className="flex justify-center items-center mt-4 mx-4 lg:mt-14 lg:mx-20 lg:mb-0">
            <div className="hidden lg:block max-lg:hidden">
              <Group1 />
            </div>
            <div className="hidden max-lg:block max-md:hidden">
              <MiddleScreensGroup />
            </div>
            <div className="hidden max-md:block">
              <HalfServicesGroup />
            </div>
          </div>
        </main>
      </section>
      <section
        id="section2"
        className="flex flex-col lg:flex-row justify-center items-center lg:m-12 lg:mx-24 min-h-screen m-8 mt-12"
      >
        <div className="flex-1 flex gap-4 flex-col">
          <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl text-center">
            <span className="text-tic">Stiamo lanciando un&apos;</span>{' '}
            <span className="text-drive">App</span>
          </h2>
          <p className="text-tic text-lg lg:text-xl text-center">
            Un&apos; <span className='text-drive'>app innovativa</span> per la cura dell&apos; auto:
            trova l&apos; officina ideale per riparazioni e manutenzione,
            e prenota comodamente da smartphone o pc.
          </p>
          <div className="self-center">
            <Link href="#registrati" passHref>
              <SignUpButton />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-lg:block hidden">
            <Group2Mobile />
          </div>
          <div className="max-lg:hidden block">
            <Group2 />
          </div>
        </div>
      </section>
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
              <div className='absolute top-1 right-3 text-tic cursor-pointer' onClick={() => setProgressIsVisible(false)}>
                X
              </div>
            </div>
          )
        }
      </section>
      <section
        id="comeFunziona"
        className="min-h-screen flex flex-col justify-center items-center gap-12 mt-12"
      >
        <Link href="#comeFunziona">
          <h2 className="font-bold text-4xl">
            <span className="text-tic">Come</span>{' '}
            <span className="text-drive">funziona</span>
          </h2>
        </Link>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-20">
          <HowItWorksCard
            title="Scegli il servizio"
            description="Scegli tra tagliando, revisione, cambio olio, ecc."
            svg={ServicesGroup}
          />
          <HowItWorksCard
            title="Registra la tua auto"
            description="Registra la tua auto tramite targa, o marca e modello."
            svg={RegisterVehicleGroup}
          />
          <HowItWorksCard
            title="Confronta e prenota"
            description="Prenota l'officina in base a prezzo, recensioni o distanza."
            svg={WorkshopsGroup}
          />
        </div>
      </section>
      <section
        id="section5"
        className="bg-drive lg:h-80 m-8 lg:m-20 lg:mx-32 rounded-3xl flex flex-col lg:flex-row justify-between items-center lg:items-end p-8 lg:p-0 lg:px-20 my-14"
      >
        <div className="self-center flex flex-col gap-6">
          <h2 className="font-bold text-2xl lg:text-5xl text-white">
            Vuoi essere il primo a scoprire l&apos; app?
          </h2>
          <p className="text-white text-2xl lg:text-3xl lg:pr-40">
            Iscriviti ora per ottenere l&apos; accesso anticipato e ricevere uno
            sconto speciale del 15% sulla tua prima prenotazione.
          </p>
          <Link className="self-start" href="#registrati" passHref>
            <SignUpButton revertStyle={true} />
          </Link>
        </div>
      </section>
      <hr className="bg-white w-full" />
      <footer className="bg-drive flex flex-col justify-center items-center pt-2">
        <div className=' flex flex-col lg:flex-row justify-center items-center gap-4 text-white'>
          <a href="https://www.iubenda.com/privacy-policy/25498782/legal">Privacy Policy</a>
          <a href="https://www.iubenda.com/privacy-policy/25498782/cookie-policy">Cookie Policy</a>
          <a href="https://www.iubenda.com/termini-e-condizioni/25498782">Terms and Conditions</a>
        </div>
        <hr className="bg-white w-full my-1" />
        <p className="text-white text-center p-2 text-sm">
          &copy; Copyright - All Rights Reserved
        </p>
      </footer>
    </>
  );
}
