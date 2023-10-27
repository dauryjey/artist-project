import { BiSearch } from 'react-icons/bi'
import { useAuthToken } from './hooks/useAuthToken'
import { useSearch } from './hooks/useSearch'
import { ListOfArtists } from './components/ListOfArtists'
import { useArtist } from './hooks/useArtist'
import { useCallback } from 'react'
import debounce from "just-debounce-it"


function App () {
  const token = useAuthToken()
  const { search, updateSearch, error } = useSearch()
  const { artists, getArtistList, loading, artistError } = useArtist({ search, token })

  const handleDebouncedSearch = useCallback(
    debounce((search, token) => {
      getArtistList({ search, token });
    }, 500),
    [getArtistList]
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    getArtistList({ search, token })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    handleDebouncedSearch({ newSearch, token })
  }

  return (
    <>
        <div className='w-full'>
          <header className='flex flex-col justify-center items-center m-5 gap-3'>
            <h1 className='text-3xl font-bold text-center'>Search for your&nbsp;
              <span className='text-green-400'>favorite artist</span>
            </h1>
            <form className='flex justify-center w-5/12 min-w-[250px]' onSubmit={handleSubmit}>
              <input
                style={{
                  border: '1px solid transparent',
                  borderColor: error ? 'red' : 'transparent'
                }} type='text' onChange={handleChange} value={search} name='query' placeholder='Bad Bunny, Kendrick Lamar, J. Cole...' className='w-full bg-gray-600 h-6 rounded-xl p-4 focus:outline-white-400 text-white'
              />
              <button type='submit' className='bg-gray-600 ml-2 rounded-full  text-gray-700 p-1 hover:bg-white hover:text-green-400'>
                <BiSearch size='1.5em' />
              </button>
            </form>
          </header>
          <main className='flex justify-center px-10'>
            <section>
              {
              loading
                ? <p className='text-white font-medium text-lg'>Loading...</p>  : 
                  artistError !== null
                    ? <p className='text-white font-medium text-lg'>{artistError}</p>
                    : <ListOfArtists artists={artists} />
                }
            </section>
          </main>
        </div>
    </>
  )
}

export default App
