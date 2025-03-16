import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './Header.module.css';

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false });

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.header__list}>
          <Link href="/" className={styles.header__list__link}>
            <li>Home</li>
          </Link>
          <Link href="/store" className={styles.header__list__link}>
            <li>Store</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.header__user}>
        <p>Hola! userName</p>
        <NoSSRShoppingCart />
      </div>
    </header>
  );
};
