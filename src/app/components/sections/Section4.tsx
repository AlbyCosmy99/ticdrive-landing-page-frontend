import HowItWorksCard from "../HowItWorksCard"
import ServicesGroup from '../../../../assets/servicesGroup.svg';
import RegisterVehicleGroup from '../../../../assets/registerVehicleGroup.svg';
import WorkshopsGroup from '../../../../assets/workshopsGroup.svg';
import Link from "next/link";

const Section4 = () => {
    return (
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
    )
}

export default Section4