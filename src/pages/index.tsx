import React, { useCallback, useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { ProductsAPI } from 'Apis'

import { ProductsContext } from 'Contexts'

import { HomeTemplate } from 'Components/Templates'

const HomePage: NextPage = () => {
  const { setProducts } = useContext(ProductsContext)

  const getProducts = useCallback(async () => {
    const allProducts = await ProductsAPI.getAllProducts(1, 10)
    const lowestPriceProduct = await ProductsAPI.getLowestPriceProduct()

    setProducts?.({ lowestPriceProduct, allProducts })
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      <Head>
        <title>Renner App - Home</title>
      </Head>

      <HomeTemplate />
    </>
  )
}

export default HomePage
