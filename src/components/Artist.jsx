/* eslint-disable react/prop-types */
import { BsSpotify } from 'react-icons/bs'

export function Artist ({ artistInfo }) {
  return (
    <article className='bg-gray-900 bg-opacity-70 flex flex-wrap gap-2 min-w-[300px] max-w-[500px] rounded-xl text-white overflow-hidden'>
      <img src={artistInfo.image} alt={artistInfo.name} className='rounded-br' />
      <div className='p-1'>
        <h3 className='font-medium text-lg pt-1'>{artistInfo.name}</h3>
        <p>Followers: {artistInfo.followers}</p>
        {artistInfo.genres.map((genre, idx) => (
          <p key={idx}>{genre}</p>
        )
        )}
        <a href={artistInfo.url} className='flex gap-1'>
          <span>
            <BsSpotify size='1.5em' className='text-green-500' />
          </span>
          Spotify URL
        </a>
      </div>
      <div className='flex flex-col items-center justify-center p-10 w-full'>
        <p className='font-medium'>Popularity</p>
        <span className='text-4xl font-semibold text-green-300'>A</span>
      </div>
    </article>
  )
}
