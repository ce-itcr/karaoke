import React, { useState } from 'react';

import Footer from '../components/landing/Footer';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
import HomeScreen from '../components/app/Home';

const DefaultApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeScreen/>
      <Footer />
    </>
  )
}

export default DefaultApp;
