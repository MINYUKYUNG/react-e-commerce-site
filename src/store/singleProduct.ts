import { selectorFamily } from 'recoil';
import { singleProductApi } from '@apis/goodsApi';
import { ProductGuard } from '@utils/type';

export const singleProduct = selectorFamily({
  key: 'singleProduct',
  get: (productId: string | undefined) => async () => {
    const data: ProductGuard = await singleProductApi(productId);
    return data;
  },
});
