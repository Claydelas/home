import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import ModelContainer from '@/components/containers/ModelContainer';
import dynamic from 'next/dynamic';

const Model = dynamic(() => import('../Model'), {
  ssr: false,
  loading: () => <ModelContainer />,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='max-w-md mx-auto pt-14'>
        <Model />
        {children}
        {/*Footer*/}
      </main>
    </>
  );
}
