import { useCallback, useRef, useState } from 'react'
import { getArtist } from '../services/artist'

export const useArtist = ({ search, token }) => {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(false)
  const [artistError, setArtistError] = useState(null)
  const previousSearch = useRef(search)

  const getArtistList = useCallback(async () => {
    if (!search || !token) {
      setArtists([])
      return
    }

    if (search === previousSearch.current) return

    try {
      setLoading(true)
      previousSearch.current = search
      const newArtists = await getArtist({ search, token })
      setArtists(newArtists)
    } catch (e) {
      setArtistError(e.message)
    } finally {
      setLoading(false)
    }
  }, [search, token])

  return { artists, getArtistList, loading, artistError }
}
