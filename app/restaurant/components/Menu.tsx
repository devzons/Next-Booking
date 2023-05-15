import React from 'react'
import MenuCard from './MenuCard'

export default function Menu() {
  return (
    <main className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        <div className='flex flex-col md:flex-wrap md:justify-between'>
          <div className='grid md:grid-cols-2 md:gap-4'>
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </main>
  )
}
