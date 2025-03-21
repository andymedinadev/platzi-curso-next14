import Image from 'next/image';
import { ProductViewItemsOrder } from './ProductViewItemsOrder';
import styles from './ProductView.module.css';

interface ProductViewProps {
  product: Product;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>tags tags tags</p>
        <p className={styles.ProductView__info__description}>{product.description}</p>
        <span className={styles.ProductView__info__price}>$ {product.price}</span>
        <ProductViewItemsOrder maxQuantity={15} product={product} />
      </section>
    </main>
  );
};
