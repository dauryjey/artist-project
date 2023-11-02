export const Profile = ({ profile }) => {
  if (!profile) {
    return <p className='text-white textxs'>No profile data available</p>
  }

  return (
    <div className='flex items-center gap-3'>
      <p className='text-white font-medium'>Logged in as:</p>
      <div className='bg-gray-700 flex items-center gap-2 py-2 px-4 rounded-3xl'>
        <img className='rounded-full w-[1.5rem]' src={profile.img} alt={profile.name} />
        <a className='font-medium text-white hover:text-green-400 transition duration-300' href={profile.url}>
          {profile.name}
        </a>
      </div>
    </div>

  )
}
