import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { store } from './redux/store';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductsList />

      <GlobalStyles />
    </Provider>
  );
}

export default App;
