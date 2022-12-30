import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import RouterView from '@routes/RouterView';
import ScrollTop from '@routes/ScrollTop';
import { useSetRecoilState } from 'recoil';
import { cartItemsState } from '@store/cart';
import { Storage } from '@utils/storage';

function App() {
  const setCartItems = useSetRecoilState(cartItemsState);

  useEffect(() => {
    if (Storage.get('cart_data') === null) {
      Storage.set('cart_data', JSON.stringify({}));
    } else if (Storage.get('cart_data')) {
      setCartItems(JSON.parse(Storage.get('cart_data') || '{}'));
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      <RouterView />
    </BrowserRouter>
  );
}

export default App;
