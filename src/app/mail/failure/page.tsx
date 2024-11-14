import Link from "next/link"

const Failure = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-2">
            <h1>Errore durante la verifica la mail. Riprova.</h1>
            <h2 className="underline"><Link href='https://www.ticdrive.it'>Vai alla pagina di <span className="text-tic">Tic</span><span className="text-drive">Drive</span></Link></h2>
        </div>
    )
}

export default Failure