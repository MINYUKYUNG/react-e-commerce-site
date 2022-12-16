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
  default: {
    // 1: { id: 1, count: 2 } 형식으로 추가된다.
  },
});

export const updateCart = selector({
  key: 'updateCart',
  get: () => ({}), // 원본훼손X
  set: ({ set }, payload) => { // 원본훼손O
    const { getParams, num } = payload as payGuard;
    let save: Record<K, V> = {};

    if (Storage.get('cart_data')) {
      save = JSON.parse(Storage.get('cart_data') || '{}');
    } else {
      save = {};
    }

    // saveCart 값 바꾸고 -> Storage.set 업데이트
    if (save[getParams]) { // 있으면, 기존것에 추가
      if (save[getParams].count === 1 && num === -1) {
        save[getParams] = { id: getParams, count: 1 };
      } else {
        save[getParams].count += num;
      }
    } else { // undefined면, 새로 추가
      save[getParams] = { id: getParams, count: 1 };
    }

    set(saveCart, save);
    Storage.set('cart_data', JSON.stringify(save));
  },
});

export const deleteItem = selector({
  key: 'deleteItem',
  get: () => ({}), // 원본훼손X
  set: ({ set, get }, payload) => { // 원본훼손O
    const { id } = payload as { id: number };
    let save: Record<K, V> = {};

    Object.keys(get(saveCart)).forEach((key) => {
      if (Number(key) !== id) save = { ...save, [key]: get(saveCart)[key] };
    });

    set(saveCart, save);
    Storage.set('cart_data', JSON.stringify(save));
  },
});
