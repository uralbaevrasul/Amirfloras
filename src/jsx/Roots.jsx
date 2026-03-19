import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import ProductPage from './ProductPage'

import Lakatsiya from './Location'
import Contact from './Contact'
import FlowerShopLanding from './Zakaz'
import Catalog from './Catalog'
import Hero from './Hero'
import Navbar from './Navbar'
import Footer from './Footer'
import Commnets from './Commnets'

const Roots = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={
          <>
          <Hero/>
            <Catalog/>
            <FlowerShopLanding/>
            <Commnets/>
            <Contact/>
            <Lakatsiya/>
          </>
        } />
        <Route path="/Product/:id" element={<ProductPage/>} />
        
        
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default Roots