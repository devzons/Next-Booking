import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='h-64 bg-gradient-to-r  from-orange-400 via-orange-800 to-orange-400 p-2'>
      <div className='text-center mt-5 md:mt-10'>
        <h1 className='text-white text-4xl font-semibold mb-2'>
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  )
}
