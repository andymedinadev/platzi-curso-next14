import { Hero } from 'app/components/home/Hero';
import { Description } from 'app/components/home/Description';
import { MainProducts } from 'app/components/home/MainProducts';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Suspense fallback={<Loading />}>
        <MainProducts />
      </Suspense>
    </main>
  );
}
