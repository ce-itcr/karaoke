import React from 'react';
import { 
  InfoContainer,
  InfoWrapper,
  InfoContainer2,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading, 
  Subtitle,
  Column2,
  Img2,
  ImgWrap2,
  Columnb
} from "./../Profile/ProfileElements";

export class AddSong extends React.Component{

    render(){

    if(this.props.userType === 'basic'){
        return(
            <>
            <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
                </InfoContainer2>
                <InfoContainer lightBg='true' id='profile'>
                <InfoWrapper>
                    <InfoRow imgStart='true'>
                    <Columnb>
                        <ImgWrap2>
                            <Img2 src='https://res.cloudinary.com/dek4evg4t/image/upload/v1631566958/warning.png' alt='Profile Image'/>
                        </ImgWrap2>
                    </Columnb>
                    <Column2>
                        <TextWrapper>
                            <TopLine>Su cuenta es de tipo:</TopLine>
                            <Heading darkText='true'>Nivel Básico</Heading>
                            <Subtitle darkText='true'>Envíe un mensaje a info@karaoke-app.com para adquirir un plan y acceder a todas las funcionalidades. </Subtitle>
                        </TextWrapper>
                    </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
        );
    }
    return (
      <>
        <InfoContainer2 lightBg='false' id='background'>
          <InfoWrapper></InfoWrapper>
        </InfoContainer2>
        <InfoContainer lightBg='true' id='profile'>
          <InfoWrapper>

            <InfoRow imgStart='false'>
              <Column1>
                <TextWrapper>
                  </TextWrapper>
              </Column1>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    )
  }

}

export default AddSong;
