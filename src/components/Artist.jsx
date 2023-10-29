/* eslint-disable react/prop-types */
import { BsSpotify } from 'react-icons/bs'

export const Artist = ({ artistInfo }) => {
  return (
    <article className='bg-gray-900 bg-opacity-70 flex flex-col h-fit lg:flex-row min-w-[300px] max-w-[600px] lg:h-[250px] rounded-xl text-white overflow-hidden mt-5'>
      <img className='lg:w-48 lg:h-full object-cover lg:rounded-l-xl' src={artistInfo.image} alt={artistInfo.name} />
      <div className='flex flex-col lg:flex-row lg:w-[70%] p-4 lg:p-8 space-y-4 lg:space-y-0 lg:space-x-4'>
        <div className='flex flex-col flex-1'>
          <h3 className='font-medium text-xl py-2'>{artistInfo.name}</h3>
          <p>
            <span className='font-medium'>Followers: </span>
            {artistInfo.followers}
          </p>
          <ul className='list-disc pl-5'>
            {artistInfo.genres.map((genre, idx) => {
              while (idx < 3) {
                return (
                  <li className='leading-relaxed' key={idx}>
                    {genre}
                  </li>
                )
              }
            })}
          </ul>
        </div>
        <div className='flex items-center space-x-10'>
          <a href={artistInfo.url} target='_blank' rel='noopener noreferrer'>
            <BsSpotify size='50' className='text-green-500 hover:text-green-400 transition duration-300' />
          </a>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-medium text-gray-300 mb-2'>Popularity</p>
            <span className='text-4xl font-semibold text-green-300'>{artistInfo.popularity}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
