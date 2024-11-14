"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const Success = () => {
    const {token} = useParams()
    const router = useRouter()

    useEffect(() => {
        if(!token) {
            router.replace('/success')
        }
    }, [])
 
    return (
        <p>pagina di conferma. Token: {token}</p>
    )
}

export default Success