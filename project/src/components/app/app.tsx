import MainPage from '../../pages/main-page/main-page';

type PropsType = {
  numberOfRentalOffers: number;
};

function App({ numberOfRentalOffers }: PropsType) {
  return <MainPage numberOfRentalOffers={numberOfRentalOffers} />;
}

export default App;
