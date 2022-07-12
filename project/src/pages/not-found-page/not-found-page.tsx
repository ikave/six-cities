import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

const NotFoundPage = () => (
  <div className="page page--main">
    <Header />
    <main className="page__main">
      <section className="container">
        <h1>Not Found</h1>
        <Link to="/">На главную</Link>
      </section>
    </main>
  </div>
);

export default NotFoundPage;
