import { OfferType } from '../../types';
import Router from '../router/router';

type PropsType = {
  offersList: OfferType[];
};

function App({ offersList }: PropsType) {
  return <Router offersList={offersList} />;
}

export default App;
