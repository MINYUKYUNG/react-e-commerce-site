import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import RouterView from '../routes/RouterView'
import Footer from './Footer';

function HomePage() {
  const [ door, setDoor ] = useState(false);
  const openClose = (bool: boolean) => {
    setDoor(bool)
  };

  
  return (
    <div className="drawer h-auto">
      
      <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={() => openClose(!door)} checked={ door } />

      <section className="drawer-content">
        <Header />
        <RouterView />
        <Footer />
      </section>
      
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li onClick={() =>  openClose(!door)}>
            <Link to="/fashion" className="btn btn-ghost text-gray-700 justify-start dark:text-white">패션</Link>
          </li>
          <li onClick={() =>  openClose(!door)}>
            <Link to="/accessory" className="btn btn-ghost text-gray-700 justify-start dark:text-white">액세서리</Link>
          </li>
          <li onClick={() =>  openClose(!door)}>
            <Link to="/digital" className="btn btn-ghost text-gray-700 justify-start dark:text-white">디지털</Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default HomePage;