import Link from "next/link"
import SignUpButton from "../SignUpButton"
import Group2 from '../../../../assets/group2.svg';
import Group2Mobile from '../../../../assets/group2mobile.svg';

const Section2 = () => {
    return (
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
    )
}

export default Section2