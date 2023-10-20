import { BiSearch } from 'react-icons/bi'
import { Artist } from './components/Artist'
import artist from './mocks/artist.json'

function App () {
  const artistInfo = {
    id: artist.id,
    image: artist.images[2].url,
    name: artist.name,
    followers: artist.followers.total,
    genres: artist.genres,
    url: artist.external_urls.spotify,
    popularity: artist.popularity
  }

  return (
    <>
      <div className='w-full'>
        <header className='flex flex-col justify-center items-center m-5 gap-3'>
          <h1 className='text-3xl font-bold text-center'>Search for your&nbsp;
            <span className='text-green-400'>favorite&apos;s artist</span>
          </h1>
          <form className='flex justify-center w-5/12 min-w-[250px]'>
            <input type='text' name='search_artist' className='w-full bg-gray-600 h-6 rounded-xl p-4 focus:outline-white-400 text-white' />
            <button type='submit' className='bg-gray-600 ml-2 rounded-full  text-gray-700 p-1 hover:bg-white hover:text-green-400'>
              <BiSearch size='1.5em' />
            </button>
          </form>
        </header>
        <main className='flex justify-center px-10'>
          <section>
            <Artist artistInfo={artistInfo} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
