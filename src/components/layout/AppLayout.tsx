import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import ModelContainer from '@/components/containers/ModelContainer';

type AppLayout = {
  children: ReactNode;
  includeModel: boolean;
};

export default function Layout({ children, includeModel }: AppLayout) {
  return (
    <>
      <Header />
      <main className='max-w-md mx-auto pt-12 px-4'>
        {includeModel && <ModelContainer />}
        {children}
        {/*Footer*/}
      </main>
    </>
  );
}
