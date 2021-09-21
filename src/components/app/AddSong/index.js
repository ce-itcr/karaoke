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
import ProgressBar from '../../utils/ProgressBar';

export class AddSong extends React.Component{

    songsClient = new SongsClient();

    state= {
        form:{
            songName: '',
            songAuthor: '',
            songAlbum: '',
            songLyrics: '',
            songMP3: '',
            songLRC: '',
            songCover: '',
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

    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          //console.log(text)
          toast.success('El archivo fue subido exitosamente');
          this.state.form.songLRC = text;
          //alert(text)
        };
        reader.readAsText(e.target.files[0])
      }

    createSong = async() => {
        const data = this.state.form;
        this.songsClient.postSong(data.songName, data.songAuthor, data.songAlbum, data.creationAuthor, data.songMP3, data.songLRC, data.songCover).then(
            toast.success('Canción creada exitosamente'),
            //window.location.assign('/app')
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
                    <ProgressBar></ProgressBar>
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
                <ProgressBar></ProgressBar>

                <Form action="#">
                          <FormLabel htmlFor="for">Nombre de la Canción</FormLabel>
                          <FormInput name="songName" type="text" required onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Artista</FormLabel>
                          <FormInput name="songAuthor" type="text" required onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Album</FormLabel>
                          <FormInput name="songAlbum" type="text" required onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Link de Cover Album</FormLabel>
                          <FormInput name="songCover" type="text" required onChange={this.handleChange}/>
                          {/*<FormLabel htmlFor="for">Letra</FormLabel>
                          <FormInput name="songLyrics" type="text" required onChange={this.handleChange}/>*/}
                          <FormLabel htmlFor="for">Link de Canción MP3</FormLabel>
                          <FormInput name="songMP3" type="text" required onChange={this.handleChange}/>
                          {/*<FormLabel htmlFor="for">Letra de canción en formato LRC</FormLabel>
                          <FormInput name="songLRC" type="text" height="48" required onChange={this.handleChange}/>*/}
                          <FormLabel htmlFor="for">Letra de canción en formato LRC</FormLabel>
                          <FormInput name="songMP3" type="file" required onChange={(e) => this.showFile(e)}/>
                          <FormButton type="button" onClick={this.createSong} >Añadir Canción</FormButton>
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
