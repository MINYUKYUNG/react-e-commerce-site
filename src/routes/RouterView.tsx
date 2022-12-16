import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import {
  Home,
  Fashion,
  Accessory,
  Digital,
  NotFound,
  Product,
  Cart,
} from '@pages/index';

function RouterView() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default RouterView;
