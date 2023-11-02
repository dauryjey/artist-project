import { Profile } from './components/Profile'
import { MainSection } from './components/MainSection'
import { useAppData } from './hooks/useAppData'
import { Search } from './components/Search'

function App () {
  const {
    visitedBefore,
    token,
    profile,
    userTop,
    search,
    updateSearch,
    error,
    artists,
    getArtistList,
    loading,
    artistError
  } = useAppData()

  return (
    <>
      <div className='w-full'>
        <header className='flex flex-col justify-center items-center m-5 gap-3'>
          <h1 className='text-3xl font-bold text-center'>Search for your&nbsp;
            <span className='text-green-400'>favorite artist</span>
          </h1>
          <Search {...{ token, search, updateSearch, artistError, error, visitedBefore, getArtistList }} />
          <Profile profile={profile} />
        </header>
        <MainSection {...{ visitedBefore, loading, error, artistError, artists, userTop, search }} />
      </div>
    </>
  )
}

export default App
