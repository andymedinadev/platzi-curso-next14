import Image from 'next/image';
import styles from './MainProducts.module.css';

export const MainProducts = async () => {
  const response = await fetch('http://localhost:3000/api');
  const { products }: { products: Product[] } = await response.json();

  return (
    <section>
      <h3 className={styles.title}>✨ New products released!</h3>
      <div className={styles.container}>
        {products.map((product) => {
          const imageSrc = product.image;
          return (
            <article key={product.id} className={styles.product}>
              <p className={styles.product__title}>{product.title}</p>
              <Image
                src={imageSrc}
                className={styles.product__img}
                fill
                alt={product.title}
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
