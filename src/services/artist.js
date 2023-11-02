import { fetchData } from './fetchData'
import { parseArtistData } from './parseArtistData'

export const getArtist = async ({ search, token }) => {
  const API_URL = `https://api.spotify.com/v1/search?q=${search}&type=artist&limit=10`

  try {
    const json = await fetchData({ url: API_URL, token })
    const artists = json.artists.items

    return parseArtistData(artists)
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
