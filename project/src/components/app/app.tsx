import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  promoFilm: {
    title: string,
    genre: string,
    year: string
  }
}

function App({promoFilm}: AppProps): JSX.Element {
  return (<MainScreen promoFilm={promoFilm}/>);
}

export default App;
