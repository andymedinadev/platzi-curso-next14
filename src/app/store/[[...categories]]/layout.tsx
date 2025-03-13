import { getCollections } from 'app/services/fakestore/collections';
import Link from 'next/link';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections();

  return (
    <main>
      <nav>
        {collections.map((collection) => (
          <Link style={{ padding: '2rem' }} href={collection.title} key={collection.id}>
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
