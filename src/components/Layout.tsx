import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function Layout() {
  const [door, setDoor] = useState(false);
  const handleDoor = (bool: boolean) => {
    setDoor(bool);
  };

  return (
    <div className="drawer h-auto">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={() => handleDoor(!door)} checked={door} />
      <section className="drawer-content">
        <Header />
        <Outlet />
        <Footer />
      </section>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li onClick={() => handleDoor(!door)}>
            <Link to="/fashion" className="btn btn-ghost text-gray-700 justify-start dark:text-white">패션</Link>
          </li>
          <li onClick={() => handleDoor(!door)}>
            <Link to="/accessory" className="btn btn-ghost text-gray-700 justify-start dark:text-white">액세서리</Link>
          </li>
          <li onClick={() => handleDoor(!door)}>
            <Link to="/digital" className="btn btn-ghost text-gray-700 justify-start dark:text-white">디지털</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
