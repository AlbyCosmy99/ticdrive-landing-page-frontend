import Group1 from '../../../../assets/mainGroup.svg';
import HalfServicesGroup from '../../../../assets/halfServicesGroup.svg';
import MiddleScreensGroup from '../../../../assets/middleScreensGroup.svg';

const Section1: React.FC = () => {
  return (
    <section
      id="top"
      className="h-full flex flex-col rounded-b-3xl min-h-screen"
      style={{ backgroundColor: '#00BF63' }}
    >
      <main className="flex flex-col justify-between items-center gap-4 lg:gap-2 flex-1 text-center text-white text-lg p-8 pb-0">
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight lg:flex lg:justify-center lg:items-center lg:flex-col lg:gap-2 mt-4">
            E se potessi prenotare la manutenzione auto comodamente dal tuo cellulare?
          </h1>
          <h1 className='text-2xl lg:text-5xl mt-3'>Scorri per scoprire come!</h1>
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
  );
};

export default Section1;
