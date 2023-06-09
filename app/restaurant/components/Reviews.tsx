import ReviewCard from './ReviewCard'
import { Review } from '@prisma/client'

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h1 className='font-bold text-3xl text-center md:text-start mt-10 mb-7 borber-b pb-5'>
        What {reviews.length}{' '}
        {reviews.length > 1 ? ' people are ' : ' person is '} saying
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
