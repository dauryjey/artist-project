import { BiSearch } from 'react-icons/bi'
import { useCallback } from 'react'
import debounce from 'just-debounce-it'

export const Search = ({ token, search, updateSearch, artistError, error, visitedBefore, getArtistList }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDebouncedSearch = useCallback(
    debounce((search, token) => {
      if (!artistError && !error) {
        getArtistList({ search, token })
      }
    }, 500),
    [getArtistList, artistError, error]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!artistError || !error) {
      getArtistList({ search, token })
    }
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    handleDebouncedSearch({ newSearch, token })
  }

  return (
    <>
      <form className='flex justify-center w-5/12 min-w-[250px]' onSubmit={handleSubmit}>
        <input
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} type='text'
          disabled={!visitedBefore}
          onChange={handleChange} value={search} name='query' placeholder='Bad Bunny, Kendrick Lamar, J. Cole...' className='w-full bg-gray-600 h-6 rounded-xl p-4 focus:outline-white-400 text-white'
        />
        <button type='submit' disabled={!visitedBefore} className='bg-gray-600 ml-2 rounded-full  text-gray-700 p-1 hover:bg-white hover:text-green-400'>
          <BiSearch size='1.5em' />
        </button>
      </form>
    </>
  )
}
