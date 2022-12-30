import React from 'react';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import { cartItemsState, updateCart, deleteCartItem } from '../../src/store/cart';

const wrapper = (
  { children }: { children: React.ReactNode },
) => <RecoilRoot>{children}</RecoilRoot>;

const getRenderHook = () => renderHook(
  () => {
    const setUpdateCart = useSetRecoilState(updateCart);
    const setDeleteCartItem = useSetRecoilState(deleteCartItem);
    const cartItems = useRecoilValue(cartItemsState);
    return {
      setUpdateCart,
      setDeleteCartItem,
      cartItems,
    };
  },
  {
    wrapper,
  },
);

it('updateCart: 카트에 없는 상품 ID', () => {
  const { result } = getRenderHook();

  act(() => result.current.setUpdateCart({
    getParams: Number('1'),
    num: 1,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
  });

  act(() => result.current.setUpdateCart({
    getParams: Number('2'),
    num: 1,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 1 },
  });
});

it('updateCart: 카트에 있는 상품 ID', () => {
  const { result } = getRenderHook();

  act(() => result.current.setUpdateCart({
    getParams: Number('1'),
    num: 1,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 2 },
    2: { id: 2, count: 1 },
  });

  act(() => result.current.setUpdateCart({
    getParams: Number('1'),
    num: -1,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 1 },
  });
});

it('updateCart: 카트에 있는 상품 ID 중 count = 1, num = -1', () => {
  const { result } = getRenderHook();

  act(() => result.current.setUpdateCart({
    getParams: Number('1'),
    num: -1,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 1 },
  });
});

it('deleteCartItem: 카트에 있는 상품 ID 삭제하기 (수량 상관없이)', () => {
  const { result } = getRenderHook();

  act(() => result.current.setUpdateCart({
    getParams: Number('2'),
    num: 1,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 2 },
  });

  act(() => result.current.setDeleteCartItem({
    id: 2,
  }));

  expect(result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
  });
});
