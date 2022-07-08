import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  counts: number;
};

function App({ counts }: AppProps): JSX.Element {
  return <MainPage counts={counts} />;
}

export default App;
