import Link from 'next/link'
import AuthModal from './AuthModal'

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex flex-col md:flex-row justify-center md:justify-between'>
      <Link href='/' className='md:pl-1 flex items-center mx-auto md:mx-0'>
        <img src='/logo.svg' alt='logo' className='w-[35px] h-[35px]' />
        <span className='font-base text-lg pl-2'>
          Open<span className='font-bold'>Booking</span>
        </span>
      </Link>
      <div className='flex mx-auto md:mx-0 mt-2 md:mt-0'>
        <AuthModal isSignin={true} />
        <AuthModal isSignin={false} />
      </div>
    </nav>
  )
}
