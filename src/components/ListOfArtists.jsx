/* eslint-disable react/prop-types */
import { Artist } from "./Artist"

export const ListOfArtists = ({ artists }) => {    
    return (
        <ul>
            {
                artists.map(artist => (
                    <li key={artist.id}>
                        <Artist artistInfo={artist} />
                    </li>
                ))
            }
        </ul>
    )
}