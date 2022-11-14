import React, { useContext } from 'react'
import { CartProvider, CartContext } from '../context/cart'
import '../styles/globals.css'
import App from "next/app";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { FlagshipProvider, Flagship } from '@flagship.io/react-sdk'

library.add(fab, fas)
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
          <Navbar />
          <main className='min-h-screen bg-gray-900' >
            <Component {...pageProps} />
          </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default MyApp;