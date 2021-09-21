import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import { FaPlus } from 'react-icons/fa';
import {IconContext} from "react-icons/lib"; // this allows the changing of all icons to a specific color instead of styling each one {line 34}
import {animateScroll as scroll} from "react-scroll";
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavBtn,
  NavBtnLink,
  NavBtnLinkB
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  var currentUser = localStorage.getItem('currentUsername');
  var profilePath = "/profile/" + currentUser;

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff"}} >
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/app" onClick={toggleHome}> karaoke! </NavLogo>
            <MobileIcon onClick={ toggle }>
              <FaBars />
            </MobileIcon>
            <NavBtn>
              <NavBtnLink to="/app">Inicio</NavBtnLink>
              <NavBtnLink to={profilePath}>Perfil</NavBtnLink>
              <NavBtnLinkB to="/app/songs/create"><FaPlus/></NavBtnLinkB>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
