import { selectorFamily } from 'recoil';
import { singleApi } from '@apis/goodsApi';

export const singleProduct = selectorFamily({
  key: 'singleProduct',
  get: (productId: string | undefined) => async () => {
    const data = await singleApi(productId);

    if (data === '') return { data };
    data.price = Math.round(data.price);
    
    return { data };
  }
});