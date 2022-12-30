import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemsState, updateCart, deleteCartItem } from '@store/cart';
import { allProductsState } from '@store/goods';

function YesCart() {
  const cartItems = useRecoilValue(cartItemsState);
  const { allProductsListObj } = useRecoilValue(allProductsState);
  const setUpdateCart = useSetRecoilState(updateCart);
  const setDeleteCartItem = useSetRecoilState(deleteCartItem);

  const plusCart = (value: number) => {
    setUpdateCart({
      getParams: value,
      num: 1,
    });
  };
  const minusCart = (value: number) => {
    setUpdateCart({
      getParams: value,
      num: -1,
    });
  };
  const deleteItem = (value: number) => {
    setDeleteCartItem({
      id: value,
    });
  };

  const yesCartResult = () => {
    let cartBase: { id: number, count: number }[] = [];

    Object.keys(cartItems).forEach((key) => {
      cartBase = [...cartBase, cartItems[key]];
    });

    const cartList = cartBase.map(({ id, count }) => (
      <div key={id} className="card lg:card-side border-solid border border-gray-200 my-12">
        <Link to={`/products/${id}`} className="bg-white flex justify-center">
          <figure className="bg-white h-56 w-56">
            <img src={allProductsListObj[id].image} alt="상품 이미지" className="object-contain h-5/6 w-5/6" />
          </figure>
        </Link>
        <div className="card-body relative">
          <Link to={`/products/${id}`}>
            <h2 className="card-title">{ allProductsListObj[id].title }</h2>
          </Link>
          <p className="text-3xl">
            $
            { allProductsListObj[id].price * count }
          </p>
          <div className="card-actions pt-4">
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={() => minusCart(id)}> - </button>
              <button type="button" className="btn no-animation btn-disabled bg-white text-black">{ count }</button>
              <button type="button" className="btn btn-primary" onClick={() => plusCart(id)}> + </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-square btn-outline absolute bottom-3 2xl:top-3 right-3 border-0 hover:bg-inherit"
            onClick={() => deleteItem(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-black dark:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    ));

    return cartList;
  };

  return (
    <div>{ yesCartResult() }</div>
  );
}

export default YesCart;
