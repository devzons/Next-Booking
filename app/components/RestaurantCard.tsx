import Link from 'next/link'
import { RestaurantCardType } from '../page'
import Price from './Price'

interface Props {
  restaurant: RestaurantCardType
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className='w-full md:w-56 h-auto my-2 md:m-1 rounded md:overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          src={restaurant.main_image}
          alt={`${restaurant.name} image`}
          className='w-full h-40'
        />
        <div className='p-2'>
          <h3 className='font-bold text-xl mb-2'>{restaurant.name}</h3>
          <div className='flex items-start'>
            <div className='flex mb-2'>*****</div>
            <p className='ml-2'>77 reviews</p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3'>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}
