import './App.css'
import HomePage from './components/HomePage'
import ScrollTop from './routes/ScrollTop'
import { BrowserRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { saveCart } from '../src/store/cart';
import { useEffect } from 'react';

function App() {
  const setSaveCart = useSetRecoilState(saveCart)

  useEffect(() => {
    if (localStorage.getItem('cart_data') === null) {
      localStorage.setItem('cart_data', JSON.stringify({}))
    } else if (localStorage.getItem('cart_data')) {
      setSaveCart(JSON.parse(localStorage.getItem('cart_data') || '{}'))
    }
  }, [])


  return (
    <BrowserRouter>
      <ScrollTop />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;