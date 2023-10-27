/* eslint-disable react/prop-types */
import { BsSpotify } from 'react-icons/bs'

export const Artist = ({ artistInfo }) => {
  return (
    <article className='bg-gray-900 bg-opacity-70 flex flex-col lg:flex-row min-w-[300px] max-w-[600px] rounded-xl text-white overflow-hidden mt-5'>
      <img className='lg:w-[200px]' src={artistInfo.image} alt={artistInfo.name} />
      <div className='grid grid-cols-2 p-3'>
        <div>
        <h3 className='font-medium text-xl py-2'>{artistInfo.name}</h3>
        <p><span className='font-medium'>
        Followers:
          </span> {artistInfo.followers}</p>
        <ul className=''>
        {artistInfo.genres.map((genre, idx) => (
          <li className='leading-relaxed' key={idx}>{genre}</li>
        )
        )}
        </ul>
        </div>
        <div className='flex justify-center items-center'>
        <a href={artistInfo.url} className=''>
            <span>
              <BsSpotify size='4em' className='text-green-500' />
            </span>
          </a>
      </div>
      </div>
      <div className='flex flex-col items-center justify-center p-10 justify-self-center'>
        <p className='font-medium'>Popularity</p>
        <span className='text-4xl font-semibold text-green-300'>A</span>
      </div>
    </article>
  )
}
