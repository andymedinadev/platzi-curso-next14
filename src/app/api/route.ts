import { getProducts } from 'app/services/fakestore';

export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}
