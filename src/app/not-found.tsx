import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function notfound() {
  return (
    <main className={styles.notfound}>
      <h1 className={styles.notfound__title}>404</h1>
      <Image src="/images/404.png" alt="404" width={300} height={300} />
      <h2 className={styles.notfound__subtitle}>¡Uy, parece que el enlace se escondió!</h2>
      <p className={styles.notfound__description}>Pero nuestra tienda está abierta las 24/7</p>
      <Link className={styles.notfound__link} href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}
