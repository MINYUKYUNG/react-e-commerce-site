import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { productLists } from '@store/goods';
import { ProductGuard } from '@utils/type';

function Search() {
  const { all } = useRecoilValue(productLists);
  const [ result, setResult ] = useState<ProductGuard[]>([]);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input === '') return setResult([]);

    const list = all.filter((item: ProductGuard) => {
      return item.title.toLowerCase().indexOf(input.toLowerCase()) > -1
    });
    setResult(list);
  };

  const searchLists = result.map(({ id, title }) => {
    return (
      <li key={ id } onClick={ () => setResult([]) }>
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
        className="input max-w-xs bg-gray-300 flex-none ml-5 mr-1 dark:text-white dark:bg-gray-600 focus:outline-0"
      />
      <ul className="dropdown-content menu shadow bg-base-100 w-full flex-none ml-5 dark:text-white left-0 mt-2 max-h-96 overflow-y-auto">
        { searchLists }
      </ul>
    </div>  
  );
};

export default Search;