import { fakestoreUrls } from './urls';

export const getCollections = async () => {
  const response = await fetch(fakestoreUrls.collections.all);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data: string[] = await response.json();

  const transformedCollections = data.map((collection, index) => ({
    id: index,
    title: collection.slice(0, 3),
  }));

  return transformedCollections;
};
