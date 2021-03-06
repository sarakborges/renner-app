import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import { ProductsProvider } from 'Contexts'

import { GlobalStyle } from 'Styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </ProductsProvider>
  )
}

export default MyApp
