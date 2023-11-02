/* eslint-disable react/prop-types */
import { ArtistCard } from './ArtistCard'

export const ArtistList = ({ artists }) => {
  return (
    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
      {
                artists.map(artist => (
                  <li key={artist.id}>
                    <ArtistCard artistInfo={artist} />
                  </li>
                ))
            }
    </ul>
  )
}
