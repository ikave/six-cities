import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { favorites } from '../../mocks/favorites';
import { FavoriteOfferList } from '../../components/favorite-offer-list';

export const Favorites = () => (
  <div className='page'>
    <Header />

    <main className='page__main page__main--favorites'>
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <FavoriteOfferList favorites={favorites} />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);
