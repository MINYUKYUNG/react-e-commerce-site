import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItemsState } from '@store/cart';
import { Storage } from '@utils/storage';
import Search from './Search';

function Header() {
  const [checked, setChecked] = useState(false);

  const handleDarkMode = (e: boolean) => {
    const documentEl = window.document.documentElement;
    if (e === false) {
      setChecked(false);
      documentEl.dataset.theme = 'light';
      documentEl.classList.remove('dark');
      Storage.set('theme', 'light');
    } else if (e === true) {
      setChecked(true);
      documentEl.dataset.theme = 'dark';
      documentEl.classList.add('dark');
      Storage.set('theme', 'dark');
    }
  };

  useEffect(() => {
    if (Storage.get('theme')) {
      if (Storage.get('theme') === 'dark') handleDarkMode(true);
      else if (Storage.get('theme') === 'light') handleDarkMode(false);
    } else handleDarkMode(false);
  }, []);

  const cartItems = useRecoilValue(cartItemsState);
  let numberCart = 0;

  const redIcon = () => {
    if (Object.keys(cartItems).length) {
      Object.keys(cartItems).forEach((key) => {
        numberCart += cartItems[key].count;
      });

      return numberCart;
    }

    return 0;
  };

  return (
    <header className="navbar bg-base-100 shadow-lg fixed dark:bg-gray-900 z-10">
      <div className="w-full container mx-auto">
        <div className="flex-none">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current dark:stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
        <div className="mx-2 flex-none">
          <Link to="/" className="text-lg font-bold text-gray-700 dark:text-white">MMM</Link>
        </div>
        <div className="hidden flex-none sm:flex md:flex-1">
          <Link to="/fashion" className="btn btn-ghost text-gray-700 content-center btn-sm dark:text-white">패션</Link>
          <Link to="/accessory" className="btn btn-ghost text-gray-700 content-center btn-sm dark:text-white">액세서리</Link>
          <Link to="/digital" className="btn btn-ghost text-gray-700 content-center btn-sm dark:text-white">디지털</Link>
        </div>
        <div className="flex items-center">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={(e) => handleDarkMode(e.target.checked)} checked={checked} />
            <svg className="swap-on fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg className="swap-off fill-gray-700 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <Search />
          <Link to="/cart" className="btn btn-ghost text-gray-700 content-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="bg-red-500 text-gray-200 w-5 h-5 text-center leading-5 rounded-full text-xs absolute top-0 left-2/4">{ redIcon() }</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
