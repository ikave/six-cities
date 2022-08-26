import { ChangeEvent, FormEvent, useState } from 'react';
import { CommentProperty } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { addOfferCommentAction } from '../../store/api-actions';

type PropsType = {
  id: number;
};

const AddCommentForm = ({ id }: PropsType) => {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });
  const dispatch = useAppDispatch();

  const checkFormValidity = () => {
    if (
      formData.rating >= CommentProperty.RatingMin &&
      formData.comment.length > CommentProperty.LengthMin &&
      formData.comment.length < CommentProperty.LengthMax
    ) {
      return true;
    }
    return false;
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: Number(target.value) });
  };

  const handleTextariaChange = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: target.value });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addOfferCommentAction({ id, ...formData }));
    setFormData({ rating: 0, comment: '' });
    evt.currentTarget.reset();
  };

  return (
    <form className='reviews__form form' onSubmit={handleFormSubmit}>
      <label className='reviews__label form__label' htmlFor='review'>
        Your review
      </label>
      <div className='reviews__rating-form form__rating'>
        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='5'
          id='5-stars'
          type='radio'
          onChange={handleInputChange}
        />
        <label
          htmlFor='5-stars'
          className='reviews__rating-label form__rating-label'
          title='perfect'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='4'
          id='4-stars'
          type='radio'
          onChange={handleInputChange}
        />
        <label
          htmlFor='4-stars'
          className='reviews__rating-label form__rating-label'
          title='good'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='3'
          id='3-stars'
          type='radio'
          onChange={handleInputChange}
        />
        <label
          htmlFor='3-stars'
          className='reviews__rating-label form__rating-label'
          title='not bad'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='2'
          id='2-stars'
          type='radio'
          onChange={handleInputChange}
        />
        <label
          htmlFor='2-stars'
          className='reviews__rating-label form__rating-label'
          title='badly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>

        <input
          className='form__rating-input visually-hidden'
          name='rating'
          value='1'
          id='1-star'
          type='radio'
          onChange={handleInputChange}
        />
        <label
          htmlFor='1-star'
          className='reviews__rating-label form__rating-label'
          title='terribly'
        >
          <svg className='form__star-image' width='37' height='33'>
            <use xlinkHref='#icon-star'></use>
          </svg>
        </label>
      </div>
      <textarea
        className='reviews__textarea form__textarea'
        id='review'
        name='review'
        placeholder='Tell how was your stay, what you like and what can be improved'
        value={formData.comment}
        minLength={50}
        maxLength={300}
        onChange={handleTextariaChange}
      />
      <div className='reviews__button-wrapper'>
        <p className='reviews__help'>
          To submit review please make sure to set{' '}
          <span className='reviews__star'>rating</span> and describe your stay
          with at least <b className='reviews__text-amount'>50 characters</b>.
        </p>
        <button
          className='reviews__submit form__submit button'
          type='submit'
          disabled={!checkFormValidity()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
