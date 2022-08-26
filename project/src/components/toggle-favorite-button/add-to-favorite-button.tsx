import cn from 'classnames';
import { memo, useState } from 'react';
import { ToggleButtonSize } from '../../constants';
type PropsType = {
  isFavorite: boolean;
  onClick: () => void;
  className?: string;
  size?: ToggleButtonSize;
};

const ToggleFavoriteButton = ({
  isFavorite,
  onClick,
  className,
  size = ToggleButtonSize.Small,
}: PropsType) => {
  const [active, setActive] = useState<boolean>(isFavorite);

  const buttonClasses = cn('button', className, {
    'place-card__bookmark-button--active': active,
  });

  const handleButtonClick = () => {
    setActive(!active);
    onClick();
  };

  return (
    <button className={buttonClasses} type='button' onClick={handleButtonClick}>
      {size === ToggleButtonSize.Big ? (
        <svg className='place-card__bookmark-icon' width='31' height='33'>
          <use xlinkHref='#icon-bookmark'></use>
        </svg>
      ) : (
        <svg className='place-card__bookmark-icon' width='18' height='19'>
          <use xlinkHref='#icon-bookmark'></use>
        </svg>
      )}

      <span className='visually-hidden'>To bookmarks</span>
    </button>
  );
};

export default memo(ToggleFavoriteButton);
