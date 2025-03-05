import Image from 'next/image';
import styles from './Description.module.css';

export const Description = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.img}
        src="/images/description.jpeg"
        alt="products marketplace"
        width="500"
        height="300"
      />
      <div>
        <h2 className={styles.title}>Bring the future today</h2>
        <p className={styles.description}>
          Future World: Your Gateway to Tomorrow&#39;s Tech! Dive into a world of cutting-edge
          gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
