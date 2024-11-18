import Link from "next/link"
import SignUpButton from "../SignUpButton"

const Section5 = () => {
    return (
        <section
        id="section5"
        className="bg-drive lg:h-80 m-8 lg:m-20 lg:mx-32 lg:p-4 rounded-3xl flex flex-col lg:flex-row justify-evenly items-center lg:items-end p-6 pr-8 lg:p-8 lg:p-0 lg:px-20 my-14"
      >
        <div className="self-center flex flex-col gap-6">
          <h2 className="font-bold text-2xl lg:text-5xl text-white">
            Vuoi essere avvisato quando esce l&apos; app?
          </h2>
          <p className="text-white text-xl lg:text-2xl lg:pr-40">
            Iscriviti gratuitamente alla nostra lista d&apos; attesa e 
            ricevi uno sconto speciale del 15% sulla tua prima prenotazione.
          </p>
          <Link className="self-start" href="#registrati" passHref>
            <SignUpButton revertStyle={true} />
          </Link>
          <Link href='#comeFunziona' passHref className="underline text-white ml-1">
            Non sono convinto
          </Link>
        </div>
      </section>
    )
}

export default Section5