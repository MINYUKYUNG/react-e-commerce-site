import { selector } from 'recoil';
import axios from 'axios';

export interface proGuard {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number}
}

export const ProductLists = selector({
  key: 'ProductLists',
  get: async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    const preNums = 4;
    let all: proGuard[] = [], fash: proGuard[] = [], acce: proGuard[] = [], digi: proGuard[] = [], preFash: proGuard[] = [], preAcce: proGuard[] = [], preDigi: proGuard[] = [];

    data.forEach((item: proGuard) => {
      item.price = Math.round(item.price)
      all = [...all, item];
      if (item.category === "men's clothing" || item.category === "women's clothing") fash = [...fash, item];
      else if (item.category === "jewelery") acce = [...acce, item];
      else if (item.category === "electronics") digi = [...digi, item];
    })
    preFash = fash.slice(0, preNums)
    preAcce = acce.slice(0, preNums)
    preDigi = digi.slice(0, preNums)

    return { all, fash, acce, digi, preFash, preAcce, preDigi }
  }
});