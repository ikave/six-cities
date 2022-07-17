import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

const NotFound = () => (
  <div className="page page--main">
    <Header />
    <main className="page__main">
      <section className="container">
        <h1>404</h1>
        <p>Not Found</p>
        <Link to="/">На главную</Link>
      </section>
    </main>
  </div>
);

export default NotFound;
