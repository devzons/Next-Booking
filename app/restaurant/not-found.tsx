'use client'

import Image from 'next/image'

export default function error({ error }: { error: Error }) {
  return (
    <div className='h-screen bg-gray-200 flex flex-col justify-center items-center'>
      <Image
        width={300}
        height={300}
        src='/icons/error.png'
        alt='error image'
        className='mb-8'
      />
      <div className='bg-white px-9 py-14 shadow rounded'>
        <h3 className='text-3xl font-bold'>Well, this is embarrassing</h3>
        <p className='text-reg font-bold'>We couldn't find that restaurant</p>
        <p className='mt-6 text-sm font-light'>Error Code: 404</p>
      </div>
    </div>
  )
}
