import NavBar from './components/Navbar';
import Group2 from '../../assets/group2.svg';
import Group2Mobile from '../../assets/group2mobile.svg';
import Group1 from '../../assets/mainGroup.svg';
import Group3 from '../../assets/Group 35936.svg';
import ServicesGroup from '../../assets/servicesGroup.svg';
import RegisterVehicleGroup from '../../assets/registerVehicleGroup.svg';
import WorkshopsGroup from '../../assets/workshopsGroup.svg';
import Logo from '../../assets/logo.svg';
import HalfServicesGroup from '../../assets/halfServicesGroup.svg';
import MiddleScreensGroup from '../../assets/middleScreensGroup.svg';

import SignUpButton from './components/SignUpButton';
import HowItWorksCard from './components/HowItWorksCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section
        id="top"
        className="h-full flex flex-col rounded-b-3xl min-h-screen"
        style={{backgroundColor: '#00BF63'}}
      >
        <NavBar />
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
          <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl">
            <span className="text-tic">Stiamo lanciando un&apos;</span>{' '}
            <span className="text-drive">App</span>
          </h2>
          <p className="text-tic text-lg lg:text-xl">
          Un&apos; <span className='text-drive'>app innovativa</span> per la cura dell&apos; auto:
          trova l&apos; officina ideale per riparazioni e manutenzione,
          e prenota comodamente da smartphone o pc.
          </p>
          <div className="self-start">
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
        className="bg-drive w-full h-100 lg:h-80 flex flex-col justify-center items-center p-8 lg:p-20 lg:pr-80 gap-6 lg:pl-40"
      >
        <p className="text-white text-3xl lg:text-4xl font-bold lg:pr-40">
          Iscriviti ora per ottenere l&apos; accesso anticipato e ricevere uno
          sconto speciale del 15% sulla tua prima prenotazione.
        </p>
        <form
          action="/api/register"
          method="POST"
          className="flex flex-col lg:flex-row items-start lg:items-center self-start gap-2"
        >
          <input
            name="email"
            placeholder="email"
            type="email"
            className="h-fit w-80 p-4 rounded-3xl h-full"
            required
          />
          <SignUpButton revertStyle={true} />
        </form>
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
            description="Scegli tra tagliando, revisione o cambio olio."
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
      <footer className="bg-drive ">
        <NavBar />
        <hr className="bg-white w-full" />
        <p className="text-white text-center pt-4 text-sm">
          &copy; Copyright - All Rights Reserved
        </p>
      </footer>
    </>
  );
}
