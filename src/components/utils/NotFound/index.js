import React, { Component } from 'react';
import Video from "../../../assets/videos/not-found.mp4";
import { 
    HeroContainer,
    HeroBg,
    HeroContent,
    VideoBg,
    HeroH1,
    HeroP
 } from '../../landing/HeroSection/HeroElements';


class NotFound extends Component {
  render() {

    return (
        <HeroContainer>

        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
        <HeroH1>404</HeroH1>
        <HeroH1>La página que estás buscando</HeroH1>
        <HeroH1>no está aquí</HeroH1>
        <HeroP>
            Intentaste alguna ruta que no existe o viniste aquí por error. Sea lo que sea, intente usar la navegación.
        </HeroP>
        </HeroContent>
        </HeroContainer>
    );
  }
}



export default (NotFound);