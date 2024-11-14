"use client"

import Spinner from "@/app/components/ui/Spinner"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const MailConfirmation = () => {
    const {token} = useParams()
    const router = useRouter()

    useEffect(() => {
        if(!token) {
            router.replace('/mail/confirmation')
        }

        const checkToken = async () => {
            try {
                const response = await fetch(`https://landing-page-users-ticdrive-backend.onrender.com/api/check-token/token=${token}`)
                const tokenIsValid = await response.json()
                if(tokenIsValid) {
                    console.log(tokenIsValid)
                    router.replace('/mail/success/' + token)
                } else {
                    router.replace('/mail/failure')
                }
            } catch(error) {
                console.log(error)
                router.replace('/mail/failure')
            }
        }
        checkToken()
    }, [])
 
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <p className="mb-2">Verificando la tua mail. Attendere...</p>
            <Spinner />
        </div>
    )
}

export default MailConfirmation