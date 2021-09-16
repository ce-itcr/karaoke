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
  //BtnWrap,
  ImgWrap,
  Img
} from "./ProfileElements";
import ProgressBar from '../../utils/ProgressBar';

export class ProfileSection extends React.Component{
  toggleHome = () => {
    //console.log(this.props.userData.data[0].username);
    scroll.scrollToTop();
  }

  logout = () => {
    //window.location.assign('/');
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
          <ProgressBar></ProgressBar>
            <InfoRow imgStart='true'>
              <Column1>
                <TextWrapper>
                  <TopLine>@{user.username}</TopLine>
                  <Heading darkText='true'>{user.fullName}</Heading>
                  <hr/>
                  <Subtitle darkText='true'>Correo: {user.mail} </Subtitle>
                  <hr/>
                  <Subtitle darkText='true'>Ubicación: {user.location} </Subtitle>
                  <hr/>
                  <Subtitle darkText='true'>Tipo de Cuenta: {user.userType}</Subtitle>
                  {/*<BtnWrap>
                    <Button 
                      to="/"
                      onClick={this.toggleHome}
                      primary={'false' ? 1 : 0}
                      dark={'false' ? 1 : 0}
                      >Actualizar Tipo de Cuenta</Button>
                    <Button 
                      to="/"
                      onClick={this.toggleHome}
                      primary={'false' ? 1 : 0}
                      dark={'true' ? 1 : 0}
                      >Actualizar Contraseña</Button>
                  </BtnWrap>*/}
                  <Button 
                      marginTop='20px'
                      to="/"
                      type="button"
                      onClick={this.logout}
                      >Cerrar Sesión</Button>
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
