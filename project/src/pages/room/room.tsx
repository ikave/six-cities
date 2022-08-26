import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import {
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOfferNearbyAction,
} from '../../store/api-actions';

import {
  getCurrentOffer,
  getDataLoadedStatus,
  getOfferComments,
  getOfferNearby,
} from '../../store/app-data/selectors';
import OfferDetails from '../../components/offer-details/offer-details';
import { Spinner } from '../../components/spinner';
import { Header } from '../../components/header';
import { NearPlaces } from '../../components/near-places';

export const Room = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const offer = useAppSelector(getCurrentOffer);
  const comments = useAppSelector(getOfferComments);
  const nearby = useAppSelector(getOfferNearby);
  const isLoadingData = useAppSelector(getDataLoadedStatus);

  useEffect(() => {
    dispatch(fetchOfferAction(Number(id)));
    dispatch(fetchOfferCommentsAction(Number(id)));
    dispatch(fetchOfferNearbyAction(Number(id)));
  }, [dispatch, id]);

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        {isLoadingData ? (
          <Spinner />
        ) : (
          <>
            {offer && (
              <OfferDetails offer={offer} comments={comments} nearby={nearby} />
            )}

            <NearPlaces nearby={nearby} />
          </>
        )}
      </main>
    </div>
  );
};
