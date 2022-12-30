import { renderHook, waitFor } from '@testing-library/react';
import React, { Suspense } from 'react';
import { useRecoilValue, RecoilRoot } from 'recoil';
import { singleProduct } from '../../src/store/singleProduct';

const wrapper = (
  { children }: { children: React.ReactNode },
) => (
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  </RecoilRoot>
);

const getRenderHook = () => renderHook(
  () => {
    const data = useRecoilValue(singleProduct('1'));
    return {
      data,
    };
  },
  {
    wrapper,
  },
);

it('GET /products/1: 상품목록 중 ID 값이 일치하는 1개의 데이터 객체만 가져오기', async () => {
  const { result } = getRenderHook();

  const expected = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 110,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://mmm-api.chloemin.com/assets/productImage1.jpg',
    rating: {
      rate: 4,
      count: 120,
    },
  };

  await waitFor(() => expect(result.current.data).toEqual(expected));
});
