import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-data/selectors';
import { ReviewType } from '../../types';
import { AddCommentForm } from '../add-comment-form';
import { ReviewList } from '../review-list';
import { AuthStatus } from '../router/enums';

type PropsType = {
  id: number;
  comments: ReviewType[];
};

const Reviews = ({ comments, id }: PropsType) => {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot;{' '}
        <span className='reviews__amount'>
          {comments ? comments.length : 0}
        </span>
      </h2>
      <ReviewList reviews={comments} />
      {authStatus === AuthStatus.Auth && <AddCommentForm id={Number(id)} />}
    </section>
  );
};

export default Reviews;
