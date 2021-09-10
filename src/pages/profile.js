import React, { useState } from 'react';

import Footer from '../components/landing/Footer';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
import UserProfile from '../components/app/Profile';
import { profileObj } from '../components/landing/InfoSection/Data';



const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <UserProfile {...profileObj}/>
      <Footer />
    </>
  )
}

export default Profile;
