import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ModelContainer from '@/components/containers/ModelContainer';

type AppLayout = {
  children: ReactNode;
  includeModel: boolean;
};

export default function Layout({ children, includeModel }: AppLayout) {
  return (
    <>
      <Header />
      <main className='max-w-[60ch] mx-auto pt-12 px-5 min-w-[296px]'>
        {includeModel && <ModelContainer />}
        {children}
        <Footer />
      </main>
    </>
  );
}
