import { Router } from '../router';
import { useAppDispatch } from '../../hooks';
import { getAllOffers } from '../../store/action';
import { offers } from '../../mocks/offers';

function App() {
  const dispatch = useAppDispatch();

  dispatch(getAllOffers({ offers }));

  return <Router />;
}

export default App;
