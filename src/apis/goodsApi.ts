import axios from 'axios';

export const productsApi = async () => {
  try {
    const { data } = await axios.get('https://fakestoreapi.com/products');  
    return data;
  } catch (error) {
    throw error;
  };
};