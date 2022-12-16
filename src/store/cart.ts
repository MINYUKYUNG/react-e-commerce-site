import { atom, selector } from 'recoil';
import { Storage } from '@utils/storage';

interface payGuard {
  getParams: number
  num: number
}

type K = string
type V = {
  id: number,
  count: number
}

export const saveCart = atom<Record<K, V>>({
  key: 'saveCart',
  default: {},
});

export const updateCart = selector({
  key: 'updateCart',
  get: () => ({}),
  set: ({ set }, payload) => {
    const { getParams, num } = payload as payGuard;
    let save: Record<K, V> = {};

    if (Storage.get('cart_data')) {
      save = JSON.parse(Storage.get('cart_data') || '{}');
    } else {
      save = {};
    }

    if (save[getParams]) {
      if (save[getParams].count === 1 && num === -1) {
        save[getParams] = { id: getParams, count: 1 };
      } else {
        save[getParams].count += num;
      }
    } else {
      save[getParams] = { id: getParams, count: 1 };
    }

    set(saveCart, save);
    Storage.set('cart_data', JSON.stringify(save));
  },
});

export const deleteItem = selector({
  key: 'deleteItem',
  get: () => ({}),
  set: ({ set, get }, payload) => {
    const { id } = payload as { id: number };
    let save: Record<K, V> = {};

    Object.keys(get(saveCart)).forEach((key) => {
      if (Number(key) !== id) save = { ...save, [key]: get(saveCart)[key] };
    });

    set(saveCart, save);
    Storage.set('cart_data', JSON.stringify(save));
  },
});
