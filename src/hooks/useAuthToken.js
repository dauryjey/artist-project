import { useState, useEffect, useCallback } from 'react'
import { getToken, getNewToken } from '../services/token'
import { verifyToken } from '../services/verify'

export const useAuthToken = ({ visitedBefore, setVisitedBefore }) => {
  const [isValid, storedToken, storedRefreshToken] = verifyToken()
  const [token, setToken] = useState(storedToken)

  const sleep = useCallback(delay => new Promise(resolve => setTimeout(resolve, delay)), [])

  useEffect(() => {
    const checkToken = async () => {
      if (!visitedBefore) {
        sleep(3000).then(() => {
          getToken().then(newToken => {
            setToken(newToken)
            setVisitedBefore(true)
            localStorage.setItem('visitedBefore', true)
          })
        })
      } else {
        if (!isValid) {
          getNewToken(storedRefreshToken).then(newToken => {
            setToken(newToken)
          })
        }
      }
    }
    checkToken()
  }, [visitedBefore, setVisitedBefore, isValid, storedRefreshToken, sleep])

  return token
}
