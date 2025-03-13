import { fakestoreUrls } from './urls';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(fakestoreUrls.products.all);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data: Product[] = await response.json();
  return data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(fakestoreUrls.products.one + id);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data: Product = await response.json();
  return data;
};
