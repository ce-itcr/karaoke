import React, { Component } from 'react';
import { 
  InfoContainer,
  InfoContainer2,
  InfoWrapper,
  FormInput, 
  Form,
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
      inputText: ''
    }
  }

  componentDidMount(){
    this.loadSongsDataAux();
  }

  handleChange = async (e) => {
      this.setState({
              ...this.state.inputText,
              [e.target.name]: e.target.value
      });
  }

  loadSongsDataAux = async() => {
    console.log('Entrando por primera vez');
  }



  loadSongsData = async() => {
    //console.log(this.state.inputText)

    if(this.state.inputText === ''){
      
      const response = await this.songsClient.getAllSongs();
      this.setState({
        songsData: response.data
      })
      toast.success("Mostrando " + response.data.length + " resultados" );

    } else {
      const response = await this.songsClient.getSong(this.state.inputText);
      //console.log(response.data)
      if(response.data.length === 0){
        this.setState({
          songsData: response.data
        })
        toast.error("No se encontraron resultados" );

      } else{ 
        this.setState({
          songsData: response.data
        })
        toast.success("Mostrando " + response.data.length + " resultado(s)" );
  
      }

    }
  }

  /*const search = async() => {
      
      localStorage.setItem('currentSearchData', state.form.searchSong);
      if(state.form.searchSong === undefined){
        const response = await songsClient.getAllSongs();
        //console.log(JSON.stringify(response.data));
        //this.rows.(JSON.stringify(response.data));
        //state.data = JSON.stringify(response.data);
        var currentData = JSON.stringify(response.data);

        setLocalData(currentData);

        //data = localData;

        //browserHistory.push('/app');
        //window.location = document.URL;

      } else {
          console.log('entro algo');
      }
  }*/


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
                <Button2 type="button" onClick={this.loadSongsData}><FaSearch/></Button2>
            </Form>

            <DataTable rows={this.state.songsData}></DataTable>


            </InfoWrapper>
        </InfoContainer>

      </>
    )
  }

}

export default HomeScreen;
