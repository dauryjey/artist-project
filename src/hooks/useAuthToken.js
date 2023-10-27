import { useState, useEffect } from 'react'
import { getToken } from '../services/token'
import { verifyToken } from '../services/verify'

export const useAuthToken = () => {
  const [isValid, storedToken] = verifyToken()
  const [token, setToken] = useState(storedToken)

  useEffect(() => {
    if (!isValid) {
      const newToken = getToken();
      setToken(newToken)
    }
  }, [isValid]);

  return token
}
