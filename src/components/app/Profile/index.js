import React from 'react';
import {Button} from "../../utils/ButtonElement";
import {animateScroll as scroll} from "react-scroll";
import { 
  InfoContainer,
  InfoWrapper,
  InfoContainer2,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from "./ProfileElements";

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <InfoContainer2 lightBg='false' id='background'>
        <InfoWrapper></InfoWrapper>
      </InfoContainer2>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description} </Subtitle>
                <Subtitle darkText={darkText}>{buttonLabel}</Subtitle>
                <BtnWrap>
                  <Button 
                    to="/"
                    onClick={toggleHome}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    >Agregar Canción</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
               <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;
