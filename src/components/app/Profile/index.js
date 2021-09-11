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

export class ProfileSection extends React.Component{


  toggleHome = () => {
    //console.log(this.props.userData.data[0].username);
    scroll.scrollToTop();
  }

  render(){
    var user = this.props.userData;

    if(!this.props.userData){
      return <></>;
    }
    return (
      <>
        <InfoContainer2 lightBg='false' id='background'>
          <InfoWrapper></InfoWrapper>
        </InfoContainer2>
        <InfoContainer lightBg='true' id='profile'>
          <InfoWrapper>
            <InfoRow imgStart='true'>
              <Column1>
                <TextWrapper>
                  <TopLine>{user.username}</TopLine>
                  <Heading darkText='true'>{user.fullName}</Heading>
                  <hr/>
                  <Subtitle darkText='true'>Correo: {user.mail} </Subtitle>
                  <hr/>
                  <Subtitle darkText='true'>Ubicación: {user.location} </Subtitle>
                  <hr/>
                  <Subtitle darkText='true'>Tipo de Cuenta: {user.userType}</Subtitle>
                  <BtnWrap>
                    <Button 
                      to="/"
                      onClick={this.toggleHome}
                      primary={'false' ? 1 : 0}
                      dark={'false' ? 1 : 0}
                      >Agregar Canción</Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                 <Img src={user.profilePicture} alt='Profile Image'/>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    )
  }

}
//const ProfileSection = ({lightBg, id, imgStart, topLine, lightText, headLine,disabledButton, darkText, description, location, buttonLabel, img, alt, primary, dark}) => {
//}

export default ProfileSection;
