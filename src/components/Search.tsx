import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { productLists } from '@store/goods';
import { ProductGuard } from '@utils/type';

function Search() {
  const { all } = useRecoilValue(productLists);
  const [ result, setResult ] = useState<ProductGuard[]>([]);
  const resetMe = useRef<HTMLInputElement>(null);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (e.target.value === '') {
      if (resetMe.current) resetMe.current.value = '';
      setResult([]);
    } else if (e.target.value !== '') {
      const list = all.filter((item: ProductGuard) => {
        return item.title.toLowerCase().indexOf(input.toLowerCase()) > -1
      });
      setResult(list);
    };
  };

  const openClose = () => {
    if (resetMe.current) resetMe.current.value = '';
    setResult([]);
  };

  const searchlists = result.map(({ id, title }) => {
    return (
      <li key={ id } onClick={ openClose }>
        <Link to={ '/products/' + id }>
          <span className="line-clamp-2">{ title }</span>
        </Link>
      </li>
    );
  });


  return (
    <div className="dropdown">
      <input 
        type="text"
        placeholder="검색"
        onChange={ search }
        defaultValue=''
        ref={ resetMe }
        className="input max-w-xs bg-gray-300 flex-none ml-5 mr-1 dark:text-white dark:bg-gray-600 focus:outline-0"
      />
      <ul className="dropdown-content menu shadow bg-base-100 w-full flex-none ml-5 dark:text-white left-0 mt-2 max-h-96 overflow-y-auto">
        { searchlists }
      </ul>
    </div>  
  );
};

export default Search;