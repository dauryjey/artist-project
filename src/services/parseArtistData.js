export const parseArtistData = (artists) => {
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
