import Image from "next/image"

const Success = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen m-2">
            <Image width={125} height={125} src="https://albycosmy99.github.io/landing-page-users-ticDrive-backend/assets/TicDriveLogo.jpeg" alt="TicDrive Logo" />
            <div className="text-center mt-5">
                <h1 className="font-bold text-2xl mb-3">La tua mail è  stata confermata!</h1>
                <p>Ti abbiamo inviato il codice sconto sulla stessa posta elettronica.</p>
                <p>Rimani aggiornato sulle novità di <span className="text-tic">Tic</span><span className="text-drive">Drive</span> e sul suo lancio.</p>
            </div>
            <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">Non ti arriva nulla?</h3>
                <p>Prova a controllare nello spam della tua cartella di posta elettronica.</p>
            </div>
            <div className="text-center mt-4">
                <h3 className="mb-2 text-lg font-semibold">Hai domande?</h3>
                <p className="m-0 mb-1">Mandaci una mail, rispondiamo in meno di 10 minuti!</p>
                <a href="mailto:infoticdrive@gmail.com" className="no-underline text-drive">infoticdrive@gmail.com</a>
            </div>
        </div>
    )
}

export default Success