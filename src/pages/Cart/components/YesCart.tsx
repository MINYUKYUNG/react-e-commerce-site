import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { saveCart, updateCart, deleteItem } from '@store/cart'
import { ProductLists } from '@store/goods';

function YesCart() {
  const save = useRecoilValue(saveCart);
  const { all } = useRecoilValue(ProductLists);
  const setUpdateCart = useSetRecoilState(updateCart);
  const setDeleteItem = useSetRecoilState(deleteItem);

  const plusCart = (value: number) => {
    setUpdateCart({
      getParams: value,
      num: 1
    });
  };
  const minusCart = (value: number) => {
    setUpdateCart({
      getParams: value,
      num: -1
    });
  };
  const delItem = (value: number) => {
    setDeleteItem({
      id: value
    });
  };

  const result = () => {
    let baseCart: { id: number, count: number }[] = [];
    for (const key in save) {
      baseCart = [...baseCart, save[key]];
    };

    const cartList = baseCart.map(({ id, count }) => {
      return (
        <div key={ id } className="card lg:card-side border-solid border border-gray-200 my-12">
          <Link to={ '/product/' + id } className="bg-white flex justify-center">
            <figure className="bg-white h-56 w-56"><img src={ all[id-1].image } alt="상품 이미지" className="object-contain h-5/6 w-5/6" /></figure>
          </Link>
          <div className="card-body relative">
            <Link to={ '/product/' + id }>
              <h2 className="card-title">{ all[id-1].title }</h2>
            </Link>
            <p className="text-3xl">${ all[id-1].price * count }</p>
            <div className="card-actions pt-4">
              <div className="btn-group">
                <button className="btn btn-primary" onClick={ () => minusCart(id) }> - </button>
                <button className="btn no-animation btn-disabled bg-white text-black">{ count }</button>
                <button className="btn btn-primary" onClick={ () => plusCart(id) }> + </button>
              </div>
            </div>
            <button className="btn btn-square btn-outline absolute bottom-3 2xl:top-3 right-3 border-0 hover:bg-inherit" onClick={ () => delItem(id) }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-black dark:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      );
    });
    
    return cartList;
  };


  return (
    <div>{ result() }</div>
  );
};

export default YesCart;