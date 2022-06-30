import { atom, selector } from 'recoil';

export const saveCart = atom<Record<K, V>>({
  key: 'saveCart',
  default: {
    // 1: { id: 1, count: 2 } 형식으로 추가된다.
  }
});

interface payGuard {
  getParams: number
  num: number
}

type K = string
type V = {
  id: number,
  count: number
}

export const updateCart = selector({
  key: 'updateCart',
  get: () => { // 원본훼손X
    return {};
  },
  set: ({ set }, payload) => { // 원본훼손O
    const { getParams, num } = payload as payGuard
    let save: Record<K, V> = {}

    if (localStorage.getItem('cart_data')) {
      save = JSON.parse(localStorage.getItem('cart_data') || '{}')
    } else {
      save = {}
    }

    // saveCart 값 바꾸고 -> localStorage.setItem 업데이트
    if (save[getParams]) { // 있으면, 기존것에 추가
      if (save[getParams].count === 1 && num === -1) {
        save[getParams] = { id: getParams, count: 1 }
      } else {
        save[getParams].count = save[getParams].count + num
      }
    } else { // undefined면, 새로 추가
      if (num === 1) {
        save[getParams] = { id: getParams, count: 1 };
      }
    }
    
    localStorage.setItem('cart_data', JSON.stringify(save))

    set(saveCart, save)
  }
});

export const deleteItem = selector({
  key: 'deleteItem',
  get: () => { // 원본훼손X
    return {};
  },
  set: ({ set, get }, payload) =>  { // 원본훼손O
    const { id } = payload as { id: number }
    let save: Record<K, V> = {}
    for (const key in get(saveCart)) {
      if (Number(key) !== id) save = {...save, [key]: get(saveCart)[key]};
    }

    set(saveCart, save)
    localStorage.setItem('cart_data', JSON.stringify(save))
  }
});