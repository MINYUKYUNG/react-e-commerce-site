import { selector } from 'recoil';
import {
  productsApi,
  womenFashionsApi,
  menFashionsApi,
  electronicsApi,
  jeweleryApi,
} from '@apis/goodsApi';
import { ProductGuard } from '@utils/type';

const PRE_HALF = 2;
const PRE_NUMS = 4;

type AllListsGuard = {
  [key: string]: ProductGuard
}

export const productLists = selector({
  key: 'productLists',
  get: async () => {
    const data = await productsApi();
    const allLists: AllListsGuard = {};

    const all = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      allLists[item.id] = item;

      return item;
    });

    return { all, allLists };
  },
});

export const womenFashionLists = selector({
  key: 'womenFashionLists',
  get: async () => {
    const data = await womenFashionsApi();

    const womenFash = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const preWomen = womenFash.slice(0, PRE_HALF);

    return { womenFash, preWomen };
  },
});

export const menFashionLists = selector({
  key: 'menFashionLists',
  get: async () => {
    const data = await menFashionsApi();

    const menFash = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const preMen = menFash.slice(0, PRE_HALF);

    return { menFash, preMen };
  },
});

export const electronicsLists = selector({
  key: 'electronicsLists',
  get: async () => {
    const data = await electronicsApi();

    const elec = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const preElec = elec.slice(0, PRE_NUMS);

    return { elec, preElec };
  },
});

export const jeweleryLists = selector({
  key: 'jeweleryLists',
  get: async () => {
    const data = await jeweleryApi();

    const jewe = data.map((item: ProductGuard) => {
      item.price = Math.round(item.price);
      return item;
    });

    const preJewe = jewe.slice(0, PRE_NUMS);

    return { jewe, preJewe };
  },
});
