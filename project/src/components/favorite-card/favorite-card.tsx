import { capitalizeFirstLetter, convertRatingToWidth } from '../../helpers';
import { OfferType } from '../../types';

type PropsType = {
  offer: OfferType;
};

const FavoriteCard = ({ offer }: PropsType) => {
  const type = capitalizeFirstLetter(offer.type);
  const ratingWidth = convertRatingToWidth(offer.rating);

  return (
    <article className='favorites__card place-card'>
      {offer.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <a href='#1'>
          <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='' />
        </a>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className='place-card__bookmark-button place-card__bookmark-button--active button'
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width='18'
              height='19'
            >
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: ratingWidth }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#1'>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
};

export default FavoriteCard;
