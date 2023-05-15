'use client'

import { Cuisine, Location, PRICE } from '@prisma/client'
import Link from 'next/link'

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[]
  cuisines: Cuisine[]
  searchParams: { city?: string; cuisine?: string; price?: PRICE }
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
    },
    { price: PRICE.REGULAR, label: '$$' },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
    },
  ]

  return (
    <>
      <div className='border-b pb-4'>
        <h2 className='mb-2 font-semibold'>Region</h2>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            key={location.id}
            className='font-light text-reg capitalize flex flex-col'
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className='border-b pb-4 mt-3'>
        <h2 className='mb-2 font-semibold'>Cuisine</h2>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            key={cuisine.id}
            className='font-light text-reg capitalize flex flex-col'
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2 font-semibold'>Price</h1>
        <div className='flex'>
          {prices.map(({ price, label }) => (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price: price,
                },
              }}
              className='border w-full text-reg text-center font-light rounded-l p-2'
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
