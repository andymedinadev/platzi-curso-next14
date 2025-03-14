import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardInterface {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/handle?id=${product.id}`} className={styles.productCard__link}>
      <article className={styles.productCard}>
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
        <div className={styles.productCard__info}>
          <h3>{product.title}</h3>
        </div>
        <span className={styles.productCard__priceTag}>${product.price} USD</span>
      </article>
    </Link>
  );
};
