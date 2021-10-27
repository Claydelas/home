import * as React from 'react';
import Header from "@/components/layout/Header"
import ModelLoader from '../ModelLoader'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('../CozyModel'), {
  ssr: false,
  loading: () => <ModelLoader />
})

export default function Layout({ children }: { children: React.ReactNode }) {
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
