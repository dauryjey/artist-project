import { useEffect, useState, useCallback } from 'react'
import { getUserProfile } from '../services/profile'

export const useProfile = ({ token }) => {
  const [profile, setProfile] = useState(undefined)

  const fetchProfile = useCallback(async () => {
    try {
      const userProfile = await getUserProfile({ token })
      setProfile(userProfile)
    } catch (e) {
      console.error('Error fetching user profile:', e)
    }
  }, [token])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return profile
}
