import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex flex-col md:flex-row justify-center md:justify-between'>
      <Link href='/' className='md:pl-1 flex items-center mx-auto md:mx-0'>
        <img
          src='/logo.svg'
          alt='logo'
          className='text-red-500 w-[35px] h-[35px]'
        />
        <span className='font-base text-lg pl-2'>
          Open<span className='font-bold'>Booking</span>
        </span>
      </Link>
      <div className='flex md:pr-1.5 pr-0 mx-auto md:mx-0 mt-2 md:mt-0'>
        <button className='bg-orange-600 text-white border p-1 px-4 rounded mr-3'>
          Sign in
        </button>
        <button className='border p-1 px-4 rounded'>Sign up</button>
      </div>
    </nav>
  )
}
