import { ProductView } from 'app/components/product/ProductView';
import { getProduct } from 'app/services/fakestore/products';
import { redirect } from 'next/navigation';

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const id = props.searchParams.id;

  if (!id) {
    redirect('/store');
  }

  const product = await getProduct(id);

  return <ProductView product={product} />;
}
