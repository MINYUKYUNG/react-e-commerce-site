import React from 'react';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import { saveCart, updateCart, deleteItem } from '../../src/store/cart';

const wrapper = (
  { children }: { children: React.ReactNode },
) => <RecoilRoot>{children}</RecoilRoot>;

const getRenderHook = () => renderHook(
  () => {
    const setUpdateCart = useSetRecoilState(updateCart);
    const setDeleteItem = useSetRecoilState(deleteItem);
    const cartItems = useRecoilValue(saveCart);
    return {
      setUpdateCart,
      setDeleteItem,
      cartItems,
    };
  },
  {
    wrapper,
  },
);

it('updateCart: 카트에 없는 상품 ID', () => {
  const update = getRenderHook();

  act(() => update.result.current.setUpdateCart({
    getParams: Number('1'),
    num: 1,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
  });

  act(() => update.result.current.setUpdateCart({
    getParams: Number('2'),
    num: 1,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 1 },
  });
});

it('updateCart: 카트에 있는 상품 ID', () => {
  const update = getRenderHook();

  act(() => update.result.current.setUpdateCart({
    getParams: Number('1'),
    num: 1,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 2 },
    2: { id: 2, count: 1 },
  });

  act(() => update.result.current.setUpdateCart({
    getParams: Number('1'),
    num: -1,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 1 },
  });
});

it('updateCart: 카트에 있는 상품 ID 중 count = 1, num = -1', () => {
  const update = getRenderHook();

  act(() => update.result.current.setUpdateCart({
    getParams: Number('1'),
    num: -1,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 1 },
  });
});

it('deleteItem: 카트에 있는 상품 ID 삭제하기 (수량 상관없이)', () => {
  const update = getRenderHook();

  act(() => update.result.current.setUpdateCart({
    getParams: Number('2'),
    num: 1,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
    2: { id: 2, count: 2 },
  });

  act(() => update.result.current.setDeleteItem({
    id: 2,
  }));

  expect(update.result.current.cartItems).toEqual({
    1: { id: 1, count: 1 },
  });
});
