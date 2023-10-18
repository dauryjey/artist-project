import { BiSearch } from "react-icons/bi";
import artist from "./mocks/artist.json"

function App () {
  return (
    <>
      <div className='w-full'>
        <header className="flex flex-col justify-center items-center m-5 gap-3">
          <h1 className='text-3xl font-bold text-center'>Search for your&nbsp;
            <span className='text-green-400'>favorite's artist</span>
          </h1>
          <form className="flex justify-center w-5/12 min-w-[250px]">
            <input type="text" name="search_artist" className="w-full bg-gray-600 h-6 rounded-xl p-4 focus:outline-white-400 text-white"/>
            <button type="submit" className="bg-gray-600 ml-2 rounded-full  text-gray-700 p-1 hover:bg-white hover:text-green-400">
              <BiSearch size="1.5em" />
            </button>
          </form>
        </header>
        <main className="flex justify-center">
            <article className="bg-gray-900 bg-opacity-70 flex gap-2 min-w-[300px] max-w-xl rounded-xl text-white overflow-hidden">
              <h3 className="font-medium text-lg pt-1">{artist.name}</h3>
              {artist.genres.map(genre => (
                <p>{genre}</p>
              )
              )}
              <img src={artist.images[2].url} alt="" className=""/>
            </article>
        </main>
      </div>
    </>
  )
}

export default App
