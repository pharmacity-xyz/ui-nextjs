import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe="hello"
        successUrl="stripe.com"
        cancelUrl="twitter.com/dayhaysoos"
        currency="USD"
      >
        <div className="">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </CartProvider>
    </>
  )
}

export default MyApp
