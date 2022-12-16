export interface ProductGuard {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number}
}

export type CategoryGuard = {
  data: ProductGuard[];
  subTitle: string;
}
