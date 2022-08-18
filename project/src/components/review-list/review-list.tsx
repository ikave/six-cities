import { ReviewType } from '../../types';
import { Review } from '../review/review';

type PropsType = {
  reviews: ReviewType[] | null;
};

export const ReviewList = ({ reviews }: PropsType) => (
  <ul className='reviews__list'>
    {reviews &&
      reviews.map((review) => <Review key={review.id} review={review} />)}
  </ul>
);
