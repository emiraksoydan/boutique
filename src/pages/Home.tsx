import React from 'react'
import HomeBanner from '../components/HomeBanner'
import ServiceCategories from '../components/ServiceCategories'
import HomeTabProduct from '../components/HomeTabProduct'
import BrandComponent from '../components/BrandComponent'
import MontlyBestSell from '../components/MontlyBestSell'

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <ServiceCategories></ServiceCategories>
      <HomeTabProduct></HomeTabProduct>
      <BrandComponent></BrandComponent>
      <MontlyBestSell></MontlyBestSell>
    </>
  )
}

export default Home