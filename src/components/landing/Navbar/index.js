import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import {IconContext} from "react-icons/lib"; // this allows the changing of all icons to a specific color instead of styling each one {line 34}
import {animateScroll as scroll} from "react-scroll";
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff"}} >
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}> karaoke! </NavLogo>
            <MobileIcon onClick={ toggle }>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >Acerca de</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >Descubre</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >Servicios</NavLinks>
              </NavItem>
              {/*<NavItem>
                <NavLinks 
                  to="signin"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  >Empieza</NavLinks>
              </NavItem>*/}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Iniciar Sesión</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
