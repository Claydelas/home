import { ReactNode } from 'react';
import Header from "@/components/layout/Header"
import ModelContainer from '@/components/containers/ModelContainer'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('../Model'), {
  ssr: false,
  loading: () => <ModelContainer />
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // dark mode logic here
    <main className="min-h-screen text-white bg-dark">
      <Header />
      <div className="max-w-md mx-auto pt-14">
        <Model />
        {children}
        {/*Footer*/}
      </div>
    </main>
  )
}
