import { ReviewType } from '../../types';
import { Review } from '../review/review';

type PropsType = {
  reviews: ReviewType[];
};

const REVIEWS_COUNT_MAX = 10;

export const ReviewList = ({ reviews }: PropsType) => {
  const list = reviews.slice().reverse();
  return (
    <ul className='reviews__list'>
      {list.length &&
        list
          .slice(0, REVIEWS_COUNT_MAX)
          .map((review) => <Review key={review.id} review={review} />)}
    </ul>
  );
};
