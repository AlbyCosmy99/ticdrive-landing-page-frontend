import handleBannerClick from "@/app/services/googleAnalytics/handleGABannerClick"
import Link from "next/link"

const Discount = () => {
    return (
        <Link
            style={{ borderTop: '1px solid white', height: '2.5rem' }}
            className="w-full bg-red-500 text-white font-bold text-sm text-center p-2 flex justify-evenly items-center fixed top-0 z-50"
            role="banner"
            passHref
            href="#registrati"
            aria-label="Banner offering 15% discount on first booking"
            onClick={handleBannerClick}
        >
            <div className="flex justify-evenly w-full h-5">
            <p className="hidden lg:block" aria-hidden="true">Sconto del 15% sulla tua prima prenotazione!</p>
            <p>Sconto del 15% sulla tua prima prenotazione!</p>
            <p className="hidden lg:block" aria-hidden="true">Sconto del 15% sulla tua prima prenotazione!</p>
            </div>
      </Link>
    )
}

export default Discount