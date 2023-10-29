const API_URL = 'https://api.spotify.com/v1/search?q='
const DEFAULT_SETTINGS = '&type=artist&limit=10'

export const getArtist = async ({ search, token }) => {
  const URL = `${API_URL}${search}${DEFAULT_SETTINGS}`
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const json = await response.json()

  const artists = json.artists.items

  return artists?.map(artist => {
    const options = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2 }
    const followers = artist.followers.total.toLocaleString('en-US', options)

    return (
      {
        id: artist.id,
        image: artist.images?.[1]?.url || './default_pfp.webp',
        name: artist.name,
        followers,
        genres: artist.genres,
        url: artist.external_urls.spotify,
        popularity: artist.popularity
      }
    )
  })
}
