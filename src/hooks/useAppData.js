import { useState, useEffect } from 'react'
import { useAuthToken } from './useAuthToken'
import { useSearch } from './useSearch'
import { useArtist } from './useArtist'
import { useProfile } from './useProfile'
import { useTop } from './useTop'

export const useAppData = () => {
  const [visitedBefore, setVisitedBefore] = useState(false)
  const token = useAuthToken({ visitedBefore, setVisitedBefore })
  const profile = useProfile({ token })
  const userTop = useTop({ token })
  const { search, updateSearch, error } = useSearch()
  const { artists, getArtistList, loading, artistError } = useArtist({ search, token })

  useEffect(() => {
    const storedVisitedBefore = localStorage.getItem('visitedBefore')
    const initialVisitedBefore = storedVisitedBefore ? JSON.parse(storedVisitedBefore) : false
    setVisitedBefore(initialVisitedBefore)
  }, [])

  return {
    visitedBefore,
    token,
    profile,
    userTop,
    search,
    updateSearch,
    error,
    artists,
    getArtistList,
    loading,
    artistError
  }
}
