import { OfferType } from '../../types';
import { Router } from '../router';

type PropsType = {
  offersList: OfferType[];
};

function App({ offersList }: PropsType) {
  return <Router offersList={offersList} />;
}

export default App;
