import { fetchData } from './fetchData'

export const getUserProfile = async ({ token }) => {
  const API_URL = 'https://api.spotify.com/v1/me'

  try {
    const profile = await fetchData({ url: API_URL, token })

    if (!profile.display_name || !profile.href || !profile.images || profile.images.length === 0) {
      throw new Error('Invalid or incomplete profile data received')
    }

    return {
      name: profile.display_name,
      url: profile.external_urls.spotify,
      img: profile.images[0].url
    }
  } catch (error) {
    console.error('Error fetching or processing profile data:', error)
    throw error
  }
}
