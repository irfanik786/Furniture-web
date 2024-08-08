import React from 'react'
import Navbar from './Components/Navbar'
import './App.css';
import HeroSection from './Components/HeroSection';
import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Product1 />
      <Product2 />
      <Product3 />
      <Footer />
    </div>
  )
}

export default App

