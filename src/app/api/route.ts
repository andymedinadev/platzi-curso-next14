import { getProducts } from 'app/services/fakestore/products';

export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}
