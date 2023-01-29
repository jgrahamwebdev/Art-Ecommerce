
//import React from 'react'

import Announcement from "../components/HomeStructure/Announcement"
import Banner from "../components/HomeStructure/Banner"
import Categories from "../components/HomeStructure/Categories"
import Footer from "../components/HomeStructure/Footer"
import Navbar from "../components/HomeStructure/Navbar"
import Newsletter from "../components/HomeStructure/Newsletter"
import Products from "../components/HomeStructure/Products"
import Slider from "../components/HomeStructure/Slider"

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home