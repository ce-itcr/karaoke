import React from 'react';
import {Toaster} from 'react-hot-toast';
import { FormInput,FormLabel, FormButton} from '../../login/Signin/SigninElements';    
import { InfoWrapper, InfoContainer2, Form } from './../AddSong/AddSongElements';
import { SongsClient } from '../../../clients/SongsClient';

export class EditSong extends React.Component{

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

    editSong = async() => {
        console.log(this.state.form);
        /*const data = this.state.form;
        this.songsClient.postSong(data.songName, data.songAuthor, data.songAlbum, data.songLyrics, data.creationAuthor).then(
            toast.success('Canción actualizada exitosamente')
        );*/
    }
  

    render(){

        var song = this.props.songsData;
        if(!this.props.songsData){
            return <></>;
          }

        return (
            <>
              <div><Toaster/></div>

              <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
              </InfoContainer2>
              
                <InfoWrapper>
                <Form action="#">
                          <FormLabel htmlFor="for">Nombre </FormLabel>
                          <FormInput name="songName" required type="text" value={song.songName} />
                          <FormLabel htmlFor="for">Artista</FormLabel>
                          <FormInput name="songAuthor" type="text"  value={song.songAuthor} onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Album</FormLabel>
                          <FormInput name="songAlbum" type="text"  value={song.songAlbum} onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Letra</FormLabel>
                          <FormInput name="songLyrics" type="text"  value={song.songLyrics} onChange={this.handleChange}/>
                          <FormButton type="button" onClick={this.editSong} >Modificar</FormButton>
                      </Form>
                </InfoWrapper>
            </>
          )

  }

}

export default EditSong;
