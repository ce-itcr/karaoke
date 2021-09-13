import React from 'react';
import { 
  InfoRow,
  TextWrapper,
  TopLine,
  Heading, 
  Subtitle,
  Column2,
  Img2,
  ImgWrap2,
  Columnb
} from "./../Profile/ProfileElements";
import {toast, Toaster} from 'react-hot-toast';
import { FormInput,FormLabel, FormButton} from '../../login/Signin/SigninElements';    
import { InfoContainer, InfoWrapper, InfoContainer2, Form } from './AddSongElements';
import { SongsClient } from '../../../clients/SongsClient';

export class AddSong extends React.Component{

    songsClient = new SongsClient();

    state= {
        form:{
            songName: '',
            songAuthor: '',
            songAlbum: '',
            songLyrics: '',
            creationAuthor: localStorage.getItem('currentUsername')
        }
    }
  
    handleChange = async (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    createSong = async() => {
        const data = this.state.form;
        this.songsClient.postSong(data.songName, data.songAuthor, data.songAlbum, data.songLyrics, data.creationAuthor).then(
            toast.success('Canción creada exitosamente')
        );
    }
  

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
    }else if(this.props.userType === 'premium'){
        return (
            <>
              <div><Toaster/></div>

              <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
              </InfoContainer2>
              
                <InfoWrapper>
                <Form action="#">
                          <FormLabel htmlFor="for">Nombre </FormLabel>
                          <FormInput name="songName" type="text" required onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Artista</FormLabel>
                          <FormInput name="songAuthor" type="text" required onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Album</FormLabel>
                          <FormInput name="songAlbum" type="text" required onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Letra</FormLabel>
                          <FormInput name="songLyrics" type="text" required onChange={this.handleChange}/>
                          <FormButton type="button" onClick={this.createSong} >Crear</FormButton>
                      </Form>
                </InfoWrapper>
            </>
          )
    }else {
        return(<>
        <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
              </InfoContainer2>
              <InfoContainer lightBg='true' id='profile'>
                <InfoWrapper>
                </InfoWrapper>
            </InfoContainer></>)
    }

  }

}

export default AddSong;
