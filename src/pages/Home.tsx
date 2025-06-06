import React from 'react'
import HomeBanner from '../components/HomeBanner'
import ServiceCategories from '../components/ServiceCategories'
import HomeTabProduct from '../components/HomeTabProduct'

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <ServiceCategories></ServiceCategories>
      <HomeTabProduct></HomeTabProduct>
    </>
  )
}

export default Home