import { useCallback, useRef, useState } from "react"
import { getArtist } from "../services/artist"

export const useArtist = ({ search }) => {
    const [artists, setArtists] = useState([])
    const previousSearch = useRef(search)

    const getArtistList = useCallback(async ({ search, token }) => {
        if (search === previousSearch.current) return

        const newArtists = await getArtist({ search, token })
        setArtists(newArtists)

    }, [])

    return { artists: artists, getArtistList }
}