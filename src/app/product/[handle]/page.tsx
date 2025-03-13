import { ProductView } from 'app/components/product/ProductView';
import { getProduct } from 'app/services/fakestore/products';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const id = props.searchParams.id;
  const product = await getProduct(id);

  return <ProductView product={product} />;
}
