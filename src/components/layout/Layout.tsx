import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import ModelContainer from '../containers/ModelContainer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='max-w-md mx-auto pt-12 px-4'>
        <ModelContainer />
        {children}
        {/*Footer*/}
      </main>
    </>
  );
}
