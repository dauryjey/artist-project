import { LoadingMessage } from './LoadingMessage'
import { ErrorMessage } from './ErrorMessage'
import { SearchResult } from './SearchResult'
import { AuthMessage } from './AuthMessage'
import { ArtistList } from './ArtistList'

export const MainSection = ({ visitedBefore, loading, error, artistError, artists, userTop, search }) => (
  <section>
    {visitedBefore
      ? (
        <>
          <section>
            {search &&
              <>
                <header className='text-2xl text-white text-center font-medium'>
                  <h3 className='text-2xl text-white text-center font-medium pb-2'>Results</h3>
                </header>
                <main className='flex justify-center w-full '>\
                  {loading && <LoadingMessage />}
                  {error && <ErrorMessage message={error} />}
                  {artistError !== null && <ErrorMessage message={artistError} />}
                  {!loading && !error && artistError === null && search && <SearchResult artists={artists} />}
                </main>
              </>}
          </section>
        </>
        )
      : (
        <AuthMessage />
        )}
    {!search && visitedBefore && (
      <section>
        <header className='pb-4'>
          <h3 className='text-2xl text-white text-center font-medium'>Artists you listen to the most.</h3>
        </header>
        <main className='flex justify-center px-5 w-full'>
          <ArtistList artists={userTop} />
        </main>
      </section>
    )}
  </section>
)
