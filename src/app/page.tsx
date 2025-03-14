import { Hero } from 'app/components/home/Hero';
import { Description } from 'app/components/home/Description';
import { MainProducts } from 'app/components/home/MainProducts';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '✨ Future world ✨',
  description: 'Welcome to the future world, an ecommerce from other century',
  keywords: ['ecommerce', 'future', 'world', 'technology'],
};

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
