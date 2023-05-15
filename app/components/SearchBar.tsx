'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  return (
    <div className='text-left text-lg py-3 m-auto flex flex-col md:flex-row gap-3 md:gop-0 justify-center'>
      <input
        className='rounded  mr-3 p-2 w-full md:w-[450px] text-center md:text-start'
        type='text'
        placeholder='State, city or town'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className='rounded bg-red-600 px-9 py-2 text-white'
        onClick={() => {
          if (location === '') return
          router.push(`/search?city=${location}`)
          setLocation('')
        }}
      >
        Let's go
      </button>
    </div>
  )
}
