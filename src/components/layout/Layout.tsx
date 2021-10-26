import * as React from 'react';
import Header from "@/components/layout/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // dark mode logic here
    <main className="min-h-screen text-white bg-dark">
      <Header />
      <div className="max-w-md mx-auto pt-14">
        {children}
        {/*Footer*/}
      </div>
    </main>
  )
}
