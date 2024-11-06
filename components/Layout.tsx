// components/Layout.tsx
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
