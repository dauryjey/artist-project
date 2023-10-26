import { BiSearch } from 'react-icons/bi'
import { AuthProvider } from './components/AuthProvider'
import { useAuthToken } from './hooks/useAuthToken'
import { useSearch } from './hooks/useSearch'
import { ListOfArtists } from './components/ListOfArtists'
import { useArtist } from './hooks/useArtist'


function App () {
  const token = useAuthToken()
  const { search, updateSearch, error } = useSearch()
  const { artists, getArtistList } = useArtist({ search, token })


  const handleSubmit = (e) => {
    e.preventDefault()
    getArtistList({ search, token })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
  }

  return (
    <>
      <AuthProvider>
        <div className='w-full'>
          <header className='flex flex-col justify-center items-center m-5 gap-3'>
            <h1 className='text-3xl font-bold text-center'>Search for your&nbsp;
              <span className='text-green-400'>favorite artist</span>
            </h1>
            <form className='flex justify-center w-5/12 min-w-[250px]' onSubmit={handleSubmit}>
              <input type='text' onChange={handleChange} value={search} name='query' placeholder='Bad Bunny, Kendrick Lamar, J. Cole...' className='w-full bg-gray-600 h-6 rounded-xl p-4 focus:outline-white-400 text-white' />
              <button type='submit' className='bg-gray-600 ml-2 rounded-full  text-gray-700 p-1 hover:bg-white hover:text-green-400'>
                <BiSearch size='1.5em' />
              </button>
            </form>
          </header>
          <main className='flex justify-center px-10'>
            <section>
              {artists.length ? <ListOfArtists artists={artists}/> : null}
            </section>
          </main>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
