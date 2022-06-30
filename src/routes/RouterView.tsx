import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import Fashion from './Fashion'
import Accessory from './Accessory'
import Digital from './Digital'
import Cart from './Cart'
import NotFound from './NotFound'

function RouterView() {
  return (
    <div>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/product"} element={<Product />}>
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path={"/fashion"} element={<Fashion />} />
      <Route path={"/accessory"} element={<Accessory />} />
      <Route path={"/digital"} element={<Digital />} />
      <Route path={"/cart"} element={<Cart />} />

      <Route path={'*'} element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default RouterView;