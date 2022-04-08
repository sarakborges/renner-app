import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyle } from 'Styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
