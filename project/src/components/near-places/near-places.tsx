import React from 'react';
import { CARD_CLASSES } from '../../constants';
import { OfferType } from '../../types';
import { OfferList } from '../offer-list';

type PropsType = {
  nearby: OfferType[];
};

const NearPlaces = ({ nearby }: PropsType) => (
  <div className='container'>
    <section className='near-places places'>
      <h2 className='near-places__title'>Other places in the neighbourhood</h2>
      <OfferList
        className='near-places__list'
        offersList={nearby}
        cardClasses={CARD_CLASSES.near}
      />
    </section>
  </div>
);

export default NearPlaces;
