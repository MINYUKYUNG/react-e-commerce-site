import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import RouterView from '@routes/RouterView';
import ScrollTop from '@routes/ScrollTop'
import { useSetRecoilState } from 'recoil';
import { saveCart } from '@store/cart';

function App() {
  const setSaveCart = useSetRecoilState(saveCart);

  useEffect(() => {
    if (localStorage.getItem('cart_data') === null) {
      localStorage.setItem('cart_data', JSON.stringify({}))
    } else if (localStorage.getItem('cart_data')) {
      setSaveCart(JSON.parse(localStorage.getItem('cart_data') || '{}'))
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