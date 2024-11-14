"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const MailConfirmation = () => {
    const {token} = useParams()
    const router = useRouter()

    useEffect(() => {
        if(!token) {
            router.replace('/success')
        }

        const checkToken = async () => {
            const response = await fetch(`${process.env.BACKEND}/api/check-token/token=${token}`)
            const tokenIsValid = await response.json()
            if(tokenIsValid) {
                console.log(tokenIsValid)
                router.replace('/mail/success/' + token)
            } else {

            }
        }

        checkToken()
    }, [])
 
    return (
        <p>pagina di controllo. Token: {token}</p>
    )
}

export default MailConfirmation