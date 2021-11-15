import React, { useState } from "react";
import { Button, HeroContainer, VideoBg, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "../assets/styles/HeroElements";
import Video from "../assets/videos/karaoke-landing.mp4";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";

export default function Index() {
  const [hover, setHover] = useState(false);


  const onHover = () => {
    setHover(!hover);
  }

  return (
    <>
      <IndexNavbar fixed />

      <HeroContainer>
        <HeroBg>
        </HeroBg>
        <HeroContent>
          <HeroH1>Diversión asegurada</HeroH1>
          <HeroP>
            Somos el servicio número uno de streaming para karaoke en Latinoamérica.
          </HeroP>
          <HeroBtnWrapper>
            {/*<Button 
              to="/auth" 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              >
                <a href="/auth">
                  Empieza ahora {hover ? <ArrowForward /> : <ArrowRight />}

                </a>
            </Button>*/}
            <button 
                className="bg-spotify-green active:bg-spotify-dark-green text-white text-md font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"
              >
                  <a href="/auth">
                      <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
                  </a>
              </button>            
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>

      <Footer />
    </>
  );
}
