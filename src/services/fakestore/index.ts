import { fakestoreUrls } from './urls';

export const getProducts = async () => {
  const response = await fetch(fakestoreUrls.products.all);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};
