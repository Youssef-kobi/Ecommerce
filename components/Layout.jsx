import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Head>
        <title>Heels shop</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className=' max-w-screen-2xl m-auto w-full'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
