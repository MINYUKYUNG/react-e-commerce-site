import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartItemsState } from '@store/cart';
import { allProductsState } from '@store/goods';
import { Storage } from '@utils/storage';
import YesCart from './components/YesCart';

function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const { allProductsListObj } = useRecoilValue(allProductsState);

  const deleteAllCartItems = () => {
    setCartItems({});
    Storage.remove('cart_data');
  };

  const totalPrice = () => {
    let newId = 0;
    let newCount = 0;
    let newTotalPrice = 0;

    Object.keys(cartItems).forEach((key) => {
      newId = cartItems[key].id;
      newCount = cartItems[key].count;
      newTotalPrice += (allProductsListObj[newId].price * newCount);
    });

    return newTotalPrice;
  };

  const result = () => {
    if (Object.keys(cartItems).length !== 0) {
      return (
        <section className="container mx-auto">
          <div className="px-5 xl:px-20">
            <YesCart />
            <div>
              <p className="text-3xl">
                Total: $
                { totalPrice() }
              </p>
              <label htmlFor="my-modal-6" className="btn modal-button mt-4 btn-primary">구매하기 버튼</label>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
                  <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
                  <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn" onClick={deleteAllCartItems}>네</label>
                    <label htmlFor="my-modal-6" className="btn">아니오</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="py-36">
        <p className="text-center text-3xl py-4 line-clamp-1">장바구니에 물품이 없습니다.</p>
        <Link to="/" className="flex justify-center">
          <button
            type="button"
            className="btn btn-primary"
          >
            쇼핑하러 가기
          </button>
        </Link>
      </section>
    );
  };

  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>장바구니</li>
          </ul>
        </div>
        { result() }
      </section>
    </main>
  );
}

export default Cart;
