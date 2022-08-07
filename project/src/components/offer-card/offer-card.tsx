import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, convertRatingToWidth } from '../../helpers';
import { CardClassType, OfferType } from '../../types';

type PropsType = {
  offer: OfferType;
  onMouseOver?: (id: number) => void;
  classes?: CardClassType;
  activeCardId?: number | null;
};

const OfferCard = ({
  offer: {
    type,
    rating,
    isPremium,
    isFavorite,
    id,
    price,
    title,
    previewImage,
  },
  onMouseOver,
  classes,
  activeCardId,
}: PropsType) => {
  const offerType = capitalizeFirstLetter(type);
  const ratingWidth = convertRatingToWidth(rating);

  const mouseOverHandler = () => {
    if (onMouseOver) {
      onMouseOver(id);
    }
  };

  const cardHoverStyle = () => {
    let style = null;
    if (activeCardId === id) {
      style = { opacity: 0.6 };
    } else {
      style = { opacity: 1 };
    }

    return style;
  };

  return (
    <article
      className={`place-card ${classes ? classes?.card : ''}`}
      style={cardHoverStyle()}
      onMouseOver={mouseOverHandler}
    >
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}

      <div
        className={`place-card__image-wrapper ${
          classes ? classes?.imageWrapper : ''
        }`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className='place-card__image'
            src={previewImage}
            width='260'
            height='200'
            alt=''
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${
              isFavorite ? ' place-card__bookmark-button--active' : ''
            }`}
            type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: ratingWidth }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className='place-card__type'>{offerType}</p>
      </div>
    </article>
  );
};

export default OfferCard;
