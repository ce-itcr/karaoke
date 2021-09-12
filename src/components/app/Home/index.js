import React, {useEffect, useState} from 'react';
import { 
  InfoContainer,
  InfoContainer2,
  InfoWrapper,
  FormInput, 
  Form,
  TopLine
} from "./HomeScreenElements";
import { Button2 } from '../../utils/ButtonElement';
import { FaSearch } from 'react-icons/fa';
import { SongsClient } from '../../../clients/SongsClient';
import { DataGrid } from '@material-ui/data-grid';
import { browserHistory } from 'react-router'

var columns = [
    { field: 'songName', headerName: 'Nombre', width: 150 },
    { field: 'songAuthor', headerName: 'Autor', width: 150},
    { field: 'songAlbum', headerName: 'Album', width: 150},
  ];
  
var data = []//[{id:"1","songName":"Fuentes de Ortiz","songAuthor":"Ed Maverick","songAlbum":"Mix Pa Llorar en Tu Cuarto","songLyrics":"songLyrics","creationAuthor":"angelortizv","creationDate":"09/08/2021 18:52:00","modificationAuthor":"angelortizv","modificationDate":"09/08/2021 20:52:00"},{id:"2","songName":"Forever Alone","songAuthor":"Paulo Londra","songAlbum":"Homerun","songLyrics":"songLyrics","creationAuthor":"angelortizv","creationDate":"09/08/2021 18:52:00","modificationAuthor":"joseagus00","modificationDate":"09/08/2021 21:52:00"}];

//export class HomeScreen extends React.Component{

function HomeScreen() {

  const songsClient = new SongsClient(); 
  
  const [localData, setLocalData] = useState([]);

  const state= {
      form:{
          inputText: '',
      },
      data: data
  }


  useEffect(() => {
    //console.log(`localData: ${localData}`);
    localStorage.setItem('songsList', localData);
    
    if(localData === undefined){
      data = [];
    }
    else {
      data = localStorage.getItem('songsList');
    }
    console.log("data: " + data);
  }, [localData])

  const handleChange = async (e) => {
      this.setState({
          form:{
              ...state.form,
              [e.target.name]: e.target.value
          }
      });
  }

  const handleClick = () => {
    
  }

  {/*const search = async() => {
      
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
  }*/}


  //render(){

    return (
      <>
        <InfoContainer2 lightBg='false' id='background'>
          <InfoWrapper></InfoWrapper>
        </InfoContainer2>
        <InfoContainer>
            <InfoWrapper>
            <Form >
                <FormInput type="text" placeholder="Buscar canción..." name="searchSong" onChange={handleChange}></FormInput>
                <Button2 type="button" onClick={handleClick}><FaSearch/></Button2>
            </Form>

            <div style={{ height: 480, width: '100%' }}>
                <DataGrid
                    rows={localData}
                    columns={columns}
                    pageSize={7}     
                    disableSelectionOnClick           
                />
            </div>


            </InfoWrapper>
        </InfoContainer>

      </>
    )
  }

//}

export default HomeScreen;
