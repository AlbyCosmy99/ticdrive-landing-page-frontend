import Group1 from '../../../../assets/mainGroup.svg';
import HalfServicesGroup from '../../../../assets/halfServicesGroup.svg';
import MiddleScreensGroup from '../../../../assets/middleScreensGroup.svg';

const Section1 = () => {
    return (
        <section
        id="top"
        className="h-full flex flex-col rounded-b-3xl min-h-screen"
        style={{ backgroundColor: '#00BF63' }}
      >
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
    )
}

export default Section1