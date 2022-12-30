import { selector } from 'recoil';
import {
  productsApi,
  womenFashionApi,
  menFashionApi,
  electronicsApi,
  jeweleryApi,
} from '@apis/goodsApi';
import { ProductGuard } from '@utils/type';

const PREVIEW_TWO = 2;
const PREVIEW_FOUR = 4;

type AllProductsListObjGuard = {
  [key: string]: ProductGuard
}

export const allProductsState = selector({
  key: 'allProductsState',
  get: async () => {
    const data = await productsApi();
    const allProductsListObj: AllProductsListObjGuard = {};

    const allProductsList = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      allProductsListObj[item.id] = item;

      return item;
    });

    return { allProductsList, allProductsListObj };
  },
});

export const womenFashionState = selector({
  key: 'womenFashionState',
  get: async () => {
    const data = await womenFashionApi();

    const womenFashionList = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const womenFashionPreviewList = womenFashionList.slice(0, PREVIEW_TWO);

    return { womenFashionList, womenFashionPreviewList };
  },
});

export const menFashionState = selector({
  key: 'menFashionState',
  get: async () => {
    const data = await menFashionApi();

    const menFashionList = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const menFashionPreviewList = menFashionList.slice(0, PREVIEW_TWO);

    return { menFashionList, menFashionPreviewList };
  },
});

export const electronicsState = selector({
  key: 'electronicsState',
  get: async () => {
    const data = await electronicsApi();

    const electronicsList = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const electronicsPreviewList = electronicsList.slice(0, PREVIEW_FOUR);

    return { electronicsList, electronicsPreviewList };
  },
});

export const jeweleryState = selector({
  key: 'jeweleryState',
  get: async () => {
    const data = await jeweleryApi();

    const jeweleryList = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const jeweleryPreviewList = jeweleryList.slice(0, PREVIEW_FOUR);

    return { jeweleryList, jeweleryPreviewList };
  },
});
