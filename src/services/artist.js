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

    return artists?.map(artist => ({
        id: artist.id,
        image: artist.images?.[2]?.url || 'default_image_url',
        name: artist.name,
        followers: artist.followers.total,
        genres: artist.genres,
        url: artist.external_urls.spotify,
        popularity: artist.popularity
    }))
}