import React, { useState } from 'react';

import Footer from '../components/landing/Footer';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';


const DefaultApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Footer />
    </>
  )
}

export default DefaultApp;
