import { useState, useRef, useEffect } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Maybe you need to search for something... 🤨')
      return
    }

    if (search === ' ') {
      return
    }

    if (search.length < 2) {
      setError('Search must be at least 2 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
