import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { allProductsState } from '@store/goods';
import { ProductGuard } from '@utils/type';

function Search() {
  const { allProductsList } = useRecoilValue(allProductsState);
  const [searchResultList, setSearchResultList] = useState<ProductGuard[]>([]);

  const productSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input === '') return setSearchResultList([]);

    const list = allProductsList.filter((
      item: ProductGuard,
    ) => item.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
    setSearchResultList(list);
  };

  const searchList = searchResultList.map(({ id, title }) => (
    <li key={id} onClick={() => setSearchResultList([])}>
      <Link to={`/products/${id}`}>
        <span className="line-clamp-2">{ title }</span>
      </Link>
    </li>
  ));

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="검색"
        onChange={productSearch}
        className="input max-w-xs bg-gray-300 flex-none ml-5 mr-1 dark:text-white dark:bg-gray-600 focus:outline-0"
      />
      <ul className="dropdown-content menu shadow bg-base-100 w-full flex-none ml-5 dark:text-white left-0 mt-2 max-h-96 overflow-y-auto">
        { searchList }
      </ul>
    </div>
  );
}

export default Search;
