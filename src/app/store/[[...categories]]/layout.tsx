import { getCollections } from 'app/services/fakestore/collections';
import Link from 'next/link';
import styles from './StoreLayout.module.css';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections();

  return (
    <main className={styles.storeLayout}>
      <nav>
        <ul className={styles.storeLayout__list}>
          {collections.map((collection) => (
            <Link className={styles.storeLayout__chip} href={collection.title} key={collection.id}>
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
