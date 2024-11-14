"use client" 

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Spinner from "../components/ui/Spinner"

const Success = () => {
    const router = useRouter()
   useEffect(()=> {
    router.replace('/')
   },[])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <p>Errore: il token e&apos; necessario.</p>
            <Link href="/" className="underline mb-3">Torna alla pagina principale</Link>
            <Spinner />
        </div>
    )
}

export default Success