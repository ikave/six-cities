import { convertDateToDatetime, convertRatingToWidth } from '../../helpers';
import { ReviewType } from '../../types';

type PropsType = {
  review: ReviewType;
};

export const Review = ({ review }: PropsType) => {
  const { rating, user, comment, date } = review;
  const { avatarUrl, name } = user;

  const ratingWidth = convertRatingToWidth(rating);
  const newDate = new Date(date);
  const commentDate = newDate.toLocaleString('en', {
    month: 'long',
    year: 'numeric',
  });
  const datetime = convertDateToDatetime(newDate);

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={avatarUrl}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: ratingWidth }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{comment}</p>
        <time className='reviews__time' dateTime={datetime}>
          {commentDate}
        </time>
      </div>
    </li>
  );
};
