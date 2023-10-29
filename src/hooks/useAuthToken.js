import { useState, useEffect } from 'react'
import { getToken } from '../services/token'
import { verifyToken } from '../services/verify'

export const useAuthToken = () => {
  const [isValid, storedToken] = verifyToken()
  const [token, setToken] = useState(storedToken)

  useEffect(() => {
    const checkToken = async () => {
      if (!isValid) {
        const newToken = await getToken()
        setToken(newToken)
      }
    }

    checkToken()
  }, [isValid])

  return token
}
