import { useState } from "react"

export const Sort = () => {
    const [sort, setSort] = useState(false)

    const handleClick = () => {
        setSort(!sort)
    }

    return (
        <>
            <input type="checkbox" id='sort' name='sort' onClick={handleClick}/>
            <label htmlFor="sort" className="text-white font-medium">Sort by popularity</label>
        </>
    )
}   