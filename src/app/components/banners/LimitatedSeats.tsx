import handleBannerClick from "@/app/services/googleAnalytics/handleGABannerClick"
import Link from "next/link"

const LimitatedSeats = () => {
    return (
        <Link
            style={{ height: '2.5rem', top: '2.5rem' }}
            className="w-full bg-yellow-500 text-white font-bold text-sm text-center p-2 flex justify-evenly items-center fixed top-0 z-50"
            role="banner"
            href="#registrati" passHref 
            aria-label="Banner limitated seats"
            onClick={handleBannerClick}
        >
            <div className="w-full h-5 flex justify-center items-center">
            <p className="lg:text-lg font-semibold">Iscriviti gratuitamente! Posti limitati!</p>
            </div>
      </Link>
    )
}

export default LimitatedSeats