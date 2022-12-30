import { renderHook, waitFor } from '@testing-library/react';
import React, { Suspense } from 'react';
import { useRecoilValue, RecoilRoot } from 'recoil';
import {
  allProductsState,
  womenFashionState,
  menFashionState,
  electronicsState,
  jeweleryState,
} from '../../src/store/goods';
import { ProductGuard } from '../../src/utils/type';

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
    const { allProductsList, allProductsListObj } = useRecoilValue(allProductsState);
    const { womenFashionList, womenFashionPreviewList } = useRecoilValue(womenFashionState);
    const { menFashionList, menFashionPreviewList } = useRecoilValue(menFashionState);
    const { electronicsList, electronicsPreviewList } = useRecoilValue(electronicsState);
    const { jeweleryList, jeweleryPreviewList } = useRecoilValue(jeweleryState);
    return {
      allProductsList,
      allProductsListObj,
      womenFashionList,
      womenFashionPreviewList,
      menFashionList,
      menFashionPreviewList,
      electronicsList,
      electronicsPreviewList,
      jeweleryList,
      jeweleryPreviewList,
    };
  },
  {
    wrapper,
  },
);

it('GET /products?sort=desc: 전체 상품목록 가져오기', async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.allProductsList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.allProductsList[0];
    const { id: secondId } = result.current.allProductsList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });

  await waitFor(() => {
    const allListsKeys = Object.keys(result.current.allProductsListObj);
    const { allProductsList } = result.current;
    expect(allListsKeys.length).toEqual(allProductsList.length);
  });
});

it("GET /products/category/women's clothing?sort=desc: 패션(여성) 상품목록 가져오기", async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.womenFashionList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.womenFashionList[0];
    const { id: secondId } = result.current.womenFashionList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.womenFashionList.filter(
      (item: ProductGuard) => item.category !== "women's clothing",
    );
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.womenFashionPreviewList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.womenFashionPreviewList[0];
    const { id: secondId } = result.current.womenFashionPreviewList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.womenFashionPreviewList.filter(
      (item: ProductGuard) => item.category !== "women's clothing",
    );
    expect(checkList.length).toEqual(0);
  });
});

it("GET /products/category/men's clothing?sort=desc: 패션(남성) 상품목록 가져오기", async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.menFashionList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.menFashionList[0];
    const { id: secondId } = result.current.menFashionList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.menFashionList.filter(
      (item: ProductGuard) => item.category !== "men's clothing",
    );
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.menFashionPreviewList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.menFashionPreviewList[0];
    const { id: secondId } = result.current.menFashionPreviewList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.menFashionPreviewList.filter(
      (item: ProductGuard) => item.category !== "men's clothing",
    );
    expect(checkList.length).toEqual(0);
  });
});

it('GET /products/category/electronics?sort=desc: 디지털 상품목록 가져오기', async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.electronicsList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.electronicsList[0];
    const { id: secondId } = result.current.electronicsList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.electronicsList.filter(
      (item: ProductGuard) => item.category !== 'electronics',
    );
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.electronicsPreviewList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.electronicsPreviewList[0];
    const { id: secondId } = result.current.electronicsPreviewList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.electronicsPreviewList.filter(
      (item: ProductGuard) => item.category !== 'electronics',
    );
    expect(checkList.length).toEqual(0);
  });
});

it('GET /products/category/jewelery?sort=desc: 악세사리 상품목록 가져오기', async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.jeweleryList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.jeweleryList[0];
    const { id: secondId } = result.current.jeweleryList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.jeweleryList.filter(
      (item: ProductGuard) => item.category !== 'jewelery',
    );
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.jeweleryPreviewList.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.jeweleryPreviewList[0];
    const { id: secondId } = result.current.jeweleryPreviewList[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.jeweleryPreviewList.filter(
      (item: ProductGuard) => item.category !== 'jewelery',
    );
    expect(checkList.length).toEqual(0);
  });
});
