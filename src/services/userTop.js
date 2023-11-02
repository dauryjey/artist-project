import { fetchData } from './fetchData'
import { parseArtistData } from './parseArtistData'

export const getUserTop = async ({ token }) => {
  const API_URL = 'https://api.spotify.com/v1/me/top/artists'

  try {
    const userInfo = await fetchData({ url: API_URL, token })
    const userTop = userInfo.items

    console.log(userTop)
    return parseArtistData(userTop)
  } catch (error) {
    console.error('Error fetching or processing user data:', error)
    throw error
  }
}
