import { ProductCard } from '../ProductCard';
import styles from './ProductsWrapper.module.css';

interface ProductsWrapperProps {
  products: Product[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className={styles.productsWrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
