import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ProductLists, proGuard } from '../store/goods';
import { useState, useRef } from 'react';

function Search() {
  const { all } = useRecoilValue(ProductLists);
  const [ result, setResult ] = useState<proGuard[]>([]);
  const resetMe = useRef<HTMLInputElement>(null);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (e.target.value === '') {
      setResult([]);
      if (resetMe.current) {
        resetMe.current.value = ''
      }
    } else if (e.target.value !== '') {
      const list = all.filter((item) => {
        return item.title.toLowerCase().indexOf(input.toLowerCase()) > -1
      });
      setResult(list);
    }
  }

  const openClose = () => {
    setResult([]);
    if (resetMe.current) {
      resetMe.current.value = ''
    }
  }

  const lists = result.map(({ id, title }) => {
    return (
      <li key={ id } onClick={ openClose }>
        <Link to={ '/product/' + id }>
          <span className="line-clamp-2">{ title }</span>
        </Link>
      </li>
    )
  })


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
        { lists }
      </ul>
    </div>  
  );
}

export default Search;