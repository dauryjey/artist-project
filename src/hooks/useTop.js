import { getUserTop } from '../services/userTop'
import { useState, useCallback, useEffect } from 'react'

export const useTop = ({ token }) => {
  const [top, setTop] = useState([])

  const fetchTop = useCallback(async () => {
    try {
      const userTop = await getUserTop({ token })
      setTop(userTop)
    } catch (e) {
      console.error('Error fetching user profile:', e)
    }
  }, [token])

  useEffect(() => {
    fetchTop()
  }, [fetchTop])

  return top
}
