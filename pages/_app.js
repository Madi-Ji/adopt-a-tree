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
        <FlagshipP>
          <Navbar />
          <main className='min-h-screen bg-gray-900' >
            <Component {...pageProps} />
          </main>
          <Footer />
        </FlagshipP>
      </CartProvider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  //Start the Flagship SDK
  const flagship = Flagship.start("bk90qks1tlug042qsqn0", "qE2fXJ77Si4lmDTeEqhAc7scNgNCwikR6YSHufRl", {
    fetchNow: false,
  });

  // Create a new visitor
  const visitor = flagship?.newVisitor({
    visitorId: "jmadiot",
    context: {
      nbItems: 0,
    },
  });

  //Fetch flags
  await visitor?.fetchFlags();

  // Pass data to the page via props
  return {
    ...appProps,
    initialFlagsData: visitor?.getFlagsDataArray()
  };

}

export default MyApp;