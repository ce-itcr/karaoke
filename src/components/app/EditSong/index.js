import React from 'react';
import { FormInput, FormInputBlocked, FormLabelBottom, FormLabel, FormButton} from '../../login/Signin/SigninElements';    
import { InfoWrapper, InfoContainer2, Form } from './../AddSong/AddSongElements';
import { SongsClient } from '../../../clients/SongsClient';
import ProgressBar from '../../utils/ProgressBar';
import {toast, Toaster} from 'react-hot-toast';
import  {FaTrash} from 'react-icons/fa';
import { Button4 } from '../../utils/ButtonElement';

export class EditSong extends React.Component{

    songsClient = new SongsClient();

    state= {
        form:{
            songId: '',
            songName: '',
            songAuthor: '',
            songAlbum: '',
            songLyrics: '',
            songMP3: '',
            songLRC: '',
            modificationAuthor: localStorage.getItem('currentUsername')
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


    editSong = async() => {

        console.log(this.state.form);
        alert(this.state.form.songLRC)
        if(this.state.form.songLRC  === ''){
          this.state.form.songLRC = this.props.songsData.songLRC;
          const data = this.state.form;
          this.songsClient.updateSong(data.songId,data.songMP3, data.songLRC, data.modificationAuthor).then(
            toast.success('Canción actualizada exitosamente')
          );
        }  
    }

    removeSong = async() => {
        const data = this.state.form;
        this.songsClient.deleteSong(data.songId);
        toast.success('Canción eliminada exitosamente')
        window.location.assign("/app")
    }
  

    render(){

        var song = this.props.songsData;
        this.state.form.songId = localStorage.getItem('songIdToEdit');
        if(!this.props.songsData){
            return <></>;
          }

        return (
            <>
              <div><Toaster/></div>

              <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
              </InfoContainer2>
              <div><Toaster/></div>
              
                <InfoWrapper>
                <ProgressBar></ProgressBar>

                <Form action="#">
                          <FormLabel htmlFor="for">Nombre</FormLabel>
                          <FormLabelBottom >***** Espacio no editable</FormLabelBottom>
                          <FormInputBlocked name="songName" readOnly type="text" value={song.songName} />
                          <FormLabel htmlFor="for">Artista</FormLabel>
                          <FormLabelBottom >***** Espacio no editable</FormLabelBottom>
                          <FormInputBlocked name="songAuthor" type="text" readOnly value={song.songAuthor} />
                          <FormLabel htmlFor="for">Album</FormLabel>
                          <FormLabelBottom >***** Espacio no editable</FormLabelBottom>
                          <FormInputBlocked name="songAlbum" type="text" readOnly value={song.songAlbum}/>
                          <FormLabel htmlFor="for">Link a canción en formato Mp3</FormLabel>
                          <FormInput name="songMP3" type="text"  onChange={this.handleChange}/>
                          <FormLabel htmlFor="for">Letra de canción en formato LRC</FormLabel>
                          <FormInput name="songLRC" type="file" required onChange={(e) => this.showFile(e)}/>
                          <FormButton type="button" onClick={this.editSong} >Modificar Canción</FormButton>

                      </Form>
                      <Button4
                            variant="contained"
                            color="primary"
                            onClick={(event) => {
                            this.removeSong();
                            }}
                            >
                            <FaTrash />
                            </Button4>

                </InfoWrapper>
            </>
          )

  }

}

export default EditSong;
