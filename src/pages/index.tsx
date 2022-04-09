import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import { HomeTemplate } from 'Components/Templates'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Renner App</title>
      </Head>

      <HomeTemplate />
    </>
  )
}

export default HomePage
