export const fetchData = async ({ url, token }) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}

const parseArtistData = (artists) => {
  const options = { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2 }

  return artists?.map(artist => ({
    id: artist.id,
    image: artist.images?.[1]?.url || './default_pfp.webp',
    name: artist.name,
    followers: artist.followers.total.toLocaleString('en-US', options),
    genres: artist.genres,
    url: artist.external_urls.spotify,
    popularity: artist.popularity
  }))
}

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

export const getUserProfile = async ({ token }) => {
  const API_URL = 'https://api.spotify.com/v1/me'

  try {
    const json = await fetchData({ url: API_URL, token })

    console.log(json)
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
