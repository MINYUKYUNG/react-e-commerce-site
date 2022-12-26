import { renderHook, waitFor } from '@testing-library/react';
import React, { Suspense } from 'react';
import { useRecoilValue, RecoilRoot } from 'recoil';
import {
  productLists,
  womenFashionLists,
  menFashionLists,
  electronicsLists,
  jeweleryLists,
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
    const { all, allLists } = useRecoilValue(productLists);
    const { womenFash, preWomen } = useRecoilValue(womenFashionLists);
    const { menFash, preMen } = useRecoilValue(menFashionLists);
    const { elec, preElec } = useRecoilValue(electronicsLists);
    const { jewe, preJewe } = useRecoilValue(jeweleryLists);
    return {
      all,
      allLists,
      womenFash,
      preWomen,
      menFash,
      preMen,
      elec,
      preElec,
      jewe,
      preJewe,
    };
  },
  {
    wrapper,
  },
);

it('전체: GET /products?sort=desc', async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.all.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.all[0];
    const { id: secondId } = result.current.all[1];
    expect(firstId).toBeGreaterThan(secondId);
  });

  await waitFor(() => {
    const allListsKeys = Object.keys(result.current.allLists);
    const { all } = result.current;
    expect(allListsKeys.length).toEqual(all.length);
  });
});

it("패션(여성): GET /products/category/women's clothing?sort=desc", async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.womenFash.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.womenFash[0];
    const { id: secondId } = result.current.womenFash[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.womenFash.filter((item: ProductGuard) => item.category !== "women's clothing");
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.preWomen.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.preWomen[0];
    const { id: secondId } = result.current.preWomen[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.preWomen.filter((item: ProductGuard) => item.category !== "women's clothing");
    expect(checkList.length).toEqual(0);
  });
});

it("패션(남성): GET /products/category/men's clothing?sort=desc", async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.menFash.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.menFash[0];
    const { id: secondId } = result.current.menFash[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.menFash.filter((item: ProductGuard) => item.category !== "men's clothing");
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.preMen.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.preMen[0];
    const { id: secondId } = result.current.preMen[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.preMen.filter((item: ProductGuard) => item.category !== "men's clothing");
    expect(checkList.length).toEqual(0);
  });
});

it('디지털: GET /products/category/electronics?sort=desc', async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.elec.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.elec[0];
    const { id: secondId } = result.current.elec[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.elec.filter((item: ProductGuard) => item.category !== 'electronics');
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.preElec.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.preElec[0];
    const { id: secondId } = result.current.preElec[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.preElec.filter((item: ProductGuard) => item.category !== 'electronics');
    expect(checkList.length).toEqual(0);
  });
});

it('악세사리: GET /products/category/jewelery?sort=desc', async () => {
  const { result } = getRenderHook();

  await waitFor(() => expect(result.current.jewe.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.jewe[0];
    const { id: secondId } = result.current.jewe[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.jewe.filter((item: ProductGuard) => item.category !== 'jewelery');
    expect(checkList.length).toEqual(0);
  });

  await waitFor(() => expect(result.current.preJewe.length >= 1).toBe(true));
  await waitFor(() => {
    const { id: firstId } = result.current.preJewe[0];
    const { id: secondId } = result.current.preJewe[1];
    expect(firstId).toBeGreaterThan(secondId);
  });
  await waitFor(() => {
    const checkList = result.current.preJewe.filter((item: ProductGuard) => item.category !== 'jewelery');
    expect(checkList.length).toEqual(0);
  });
});
