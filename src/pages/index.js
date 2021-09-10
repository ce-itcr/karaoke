import React, { useState } from 'react';
import Navbar from '../components/landing/Navbar';
import Sidebar from '../components/landing/Sidebar';
import HeroSection from '../components/landing/HeroSection';
//import InfoSection from '../components/InfoSection';
//import { homeObjOne, homeObjTwo, homeObjFour } from '../components/InfoSection/Data';
//import Services from '../components/Services';
import Footer from '../components/landing/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/*<InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjFour} />*/}
        <Footer />
    </>
  )
}

export default Home;
