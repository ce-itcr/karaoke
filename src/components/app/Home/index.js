import React, { Component } from 'react';
import { 
  InfoContainer,
  InfoContainer2,
  InfoWrapper,
  FormInput, 
  Form,
  StyledSelect,
  StyledOption,
  ComponentsWrapper
  //TopLine
} from "./HomeScreenElements";
import { toast, Toaster } from 'react-hot-toast';
import DataTable from '../../utils/DataTable';
import { Button2 } from '../../utils/ButtonElement';
import { FaSearch } from 'react-icons/fa';
import { SongsClient } from '../../../clients/SongsClient';;

export class HomeScreen extends   Component{


  songsClient = new SongsClient(); 

  constructor(){
    super();
    this.state = {
      songsData: [],
      inputText: '',
      selectedOption: ''
    }
  }

  options = [
    'one', 'two', 'three'
  ];

  defaultOption = this.options[0];

  componentDidMount(){
    this.loadSongsDataAux();
  }

  handleChange = async (e) => {
      this.setState({
              ...this.state.inputText,
              [e.target.name]: e.target.value
      });
  }

  handleChangeDropdown = async (e) => {
    this.setState({
            ...this.state.selectedOption,
            [e.target.name]: e.target.value
    });
  }

  loadSongsDataAux = async() => {
    //console.log('Entrando por primera vez');
  }


  loadSongsData = async() => {
    if(this.state.selectedOption === 'first' || this.state.selectedOption === ''){
      toast.error("Debe seleccionar alguna de las opciones de filtro");

    }
    else{
      if(this.state.inputText === ''){
  
        const response = await this.songsClient.getAllSongs();
        this.setState({
          songsData: response.data
        })
        toast.success("Mostrando " + response.data.length + " resultados" );
  
      } else{
        switch (this.state.selectedOption) {
          case 'songName':
            const responseName = await this.songsClient.getSongsByName(this.state.inputText);
            //console.log(response.data)
            if(responseName.data.length === 0){
              this.setState({
                songsData: responseName.data
              })
              toast.error("No se encontraron resultados" );
      
            } else{ 
              this.setState({
                songsData: responseName.data
              })
              toast.success("Mostrando " + responseName.data.length + " resultado(s)" );
            }
            break;
          case 'songAuthor':
            const responseAuthor = await this.songsClient.getSongsByAuthor(this.state.inputText);
            //console.log(response.data)
            if(responseAuthor.data.length === 0){
              this.setState({
                songsData: responseAuthor.data
              })
              toast.error("No se encontraron resultados" );
      
            } else{ 
              this.setState({
                songsData: responseAuthor.data
              })
              toast.success("Mostrando " + responseAuthor.data.length + " resultado(s)" );
            }
            break;
          case 'songAlbum':
            const responseAlbum = await this.songsClient.getSongsByAlbum(this.state.inputText);
            //console.log(response.data)
            if(responseAlbum.data.length === 0){
              this.setState({
                songsData: responseAlbum.data
              })
              toast.error("No se encontraron resultados" );
      
            } else{ 
              this.setState({
                songsData: responseAlbum.data
              })
              toast.success("Mostrando " + responseAlbum.data.length + " resultado(s)" );
            }
            break;
          case 'songLyrics':
            const responseLyrics = await this.songsClient.getSongsByLyrics(this.state.inputText);
            //console.log(response.data)
            if(responseLyrics.data.length === 0){
              this.setState({
                songsData: responseLyrics.data
              })
              toast.error("No se encontraron resultados" );
      
            } else{ 
              this.setState({
                songsData: responseLyrics.data
              })
              toast.success("Mostrando " + responseLyrics.data.length + " resultado(s)" );
            }
            break;
          default:
            break;
        }
      }

    }

  }

  render(){

    return (
      <>
        <InfoContainer2 lightBg='false' id='background'>
          <InfoWrapper></InfoWrapper>
        </InfoContainer2>
        <InfoContainer>
            <InfoWrapper>
            <div><Toaster/></div>
            <Form >
                <FormInput type="text" placeholder="Buscar canción..." name="inputText" onChange={this.handleChange}></FormInput>
                <ComponentsWrapper >
                  <StyledSelect name="selectedOption" onChange={this.handleChangeDropdown}>
                    <StyledOption selected value="first">Filtro</StyledOption>
                    <StyledOption value="songName">Nombre</StyledOption>
                    <StyledOption value="songAuthor">Artista</StyledOption>
                    <StyledOption value="songAlbum">Album</StyledOption>
                    <StyledOption value="songLyrics" >Fragmentos</StyledOption>
                  </StyledSelect>
                  <Button2 type="button" onClick={this.loadSongsData}><FaSearch/></Button2>
                </ComponentsWrapper>
            </Form>


            <DataTable rows={this.state.songsData}></DataTable>


            </InfoWrapper>
        </InfoContainer>

      </>
    )
  }

}

export default HomeScreen;
