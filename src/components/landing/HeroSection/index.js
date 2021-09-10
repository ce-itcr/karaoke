import React, {useState} from 'react'
import Video from "../../../videos/karaoke-landing.mp4";
import {Button} from "../../utils/ButtonElement";
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
 } from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Diversión asegurada</HeroH1>
        <HeroP>
          Somos el servicio número uno de streaming para karaoke en Latinoamérica.
        </HeroP>
        <HeroBtnWrapper>
          <Button 
            to="signin" 
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
            Empieza ahora {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
