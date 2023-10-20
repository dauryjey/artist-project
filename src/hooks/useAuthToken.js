import { useState, useEffect } from "react"
import { getToken } from "../services/token"
import { verifyToken } from "../services/verify"

export const useAuthToken = () => {
    const { storedToken, isValid } = verifyToken()
    const [token, setToken] = useState(storedToken)

    useEffect(() => {
        if (!isValid) {
            const { newToken, expiration } = getToken()
            setToken(newToken)
            localStorage.setItem('token', `${token}`)       
            localStorage.setItem('tokenExpiration', `${expiration}`)
        }
    }, [token, isValid])
  
    return token
}