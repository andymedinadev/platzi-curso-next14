import { ProductsWrapper } from 'app/components/store/ProductsWrapper';
import { getCollections } from 'app/services/fakestore/collections';
import { getProducts } from 'app/services/fakestore/products';

interface CategoryProps {
  params: { categories: string[] };
  searchParams?: { [key: string]: string };
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;

  const products = await getProducts();

  return (
    <div>
      <h1>Store Page</h1>
      <h2>Categoría Dinámica: {JSON.stringify(categories)}</h2>
      <ProductsWrapper products={products} />
    </div>
  );
}
