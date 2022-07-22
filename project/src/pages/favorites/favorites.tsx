import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { favorites } from '../../mocks/favorites';
import FavoritesList from '../../components/favorites-list/favorites-list';

const Favorites = () => (
  <div className="page">
    <Header />

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favorites={favorites} />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Favorites;
