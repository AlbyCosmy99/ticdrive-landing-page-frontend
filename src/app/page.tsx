import NavBar from "./components/Navbar";
import Group2 from '../../assets/Group 35931.svg'
import Group1 from '../../assets/Group 35933.svg'
import Group3 from '../../assets/Group 35936.svg'
import Logo from '../../assets/white_logo.svg'
import SignUpButton from "./components/SignUpButton";
import HowItWorksCard from "./components/HowItWorksCard";
export default function Home() {
  return (
    <>
        <section id="section1" className="h-full flex flex-col rounded-b-3xl min-h-screen" style={{backgroundColor: '#00BF63'}}>
          <NavBar />
          <main className="flex-1 text-center text-white text-lg">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Trova la Migliore Officina <br /> Vicino a Te in Pochi Click
            </h1>
            <p className="mt-3">
              Confronta i prezzi, leggi le recensioni e prenota facilmente e in <br/>
              modo trasparente i servizi di manutenzione e riparazione auto.
            </p>
            <div className="flex justify-center items-center">
              <Group1 />
            </div>
          </main>
      </section>
      <section id="section2" className="flex justify-center items-center mx-24 min-h-screen">
        <div className="flex-1 flex gap-4 flex-col">
          <h2 className="font-bold text-4xl"><span className="text-tic">Stiamo lanciando una</span> <span className="text-drive">App</span></h2>
          <p className="text-tic">
            Stiamo lanciando una app che cambierà il modo in cui ti prendi cura della tua auto. 
            Che si tratti di una riparazione, un controllo o della manutenzione, ti aiutiamo a trovare l officina perfetta 
            per le tue esigenze, tutto comodamente dal tuo smartphone.
          </p>
          <div className="self-start">
            <a href="#section3"><SignUpButton /></a>
          </div>
        </div> 
        <div className="flex-1">
          <Group2 />
        </div>
      </section>
      <section id="section3" className="bg-drive w-full h-80 flex flex-col justify-center items-center p-20 pr-80 gap-6 pl-40">
        <p className="text-white text-3xl font-bold">
          Iscriviti ora per ottenere l accesso anticipato e ricevere uno sconto speciale del 15% sulla tua prima prenotazione.
        </p>
        <form className="flex items-center self-start gap-2">
          <input placeholder="email" type="email" className="h-fit w-80 p-4 rounded-3xl h-full" />
          <SignUpButton revertStyle={true} />
        </form>
      </section>
      <section id="section4" className="min-h-screen flex flex-col justify-center items-center gap-12 mt-10">
        <h2 className="font-bold text-4xl"><span className="text-tic">Come</span> <span className="text-drive">funziona</span></h2>
        <div className="flex justify-center items-center gap-20">
          <HowItWorksCard />
          <HowItWorksCard />
          <HowItWorksCard />
        </div>
      </section>
      <section id="section5" className="bg-drive h-80 m-20 mx-32 rounded-3xl flex justify-between items-end px-20">
        <div className="self-center flex flex-col gap-6">
          <h2 className="font-bold text-5xl text-white">Vuoi essere il primo a scoprire l app?</h2>
          <a className="self-start" href="#section3"><SignUpButton revertStyle={true}/></a>
        </div>
        <p>image</p>
      </section>
      <footer className="bg-drive p-12 px-28">
        <div className="flex justify-between items-center pb-4">
          <Logo />
          <h2 className="font-bold text-4xl text-white">Prenota, risparmia, riparti!</h2>
          <a className="flex gap-3 justify-center items-center" href="#">
            <p className="text-white">Torna all inizio</p>
            <Group3 />
          </a>
        </div>
        <hr className="bg-white w-full"/>
        <p className="text-white text-center pt-4 text-sm">Copyright - All Right Reserved</p>
      </footer>
    </>
  );
}
