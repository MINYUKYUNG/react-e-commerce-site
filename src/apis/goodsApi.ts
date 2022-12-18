import axios from 'axios';

const apiRoot = axios.create({
  baseURL: 'https://mmm-api.chloemin.com/products',
});

const SORT = '?sort=desc';

export const productsApi = async () => {
  try {
    const { data } = await apiRoot.get(`${SORT}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const womenFashionsApi = async () => {
  try {
    const { data } = await apiRoot.get(`/category/women's clothing${SORT}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const menFashionsApi = async () => {
  try {
    const { data } = await apiRoot.get(`/category/men's clothing${SORT}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const electronicsApi = async () => {
  try {
    const { data } = await apiRoot.get(`/category/electronics${SORT}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const jeweleryApi = async () => {
  try {
    const { data } = await apiRoot.get(`/category/jewelery${SORT}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const singleApi = async (productId: string | undefined) => {
  try {
    const { data } = await apiRoot.get(`/${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
