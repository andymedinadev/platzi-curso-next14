import Image from 'next/image';
import styles from './MainProducts.module.css';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const MainProducts = async () => {
  const products: Product[] = await getProducts();

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
