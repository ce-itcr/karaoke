import React from 'react';
import { Button3 } from './ButtonElement';
import {
    DataGrid,
  } from "@material-ui/data-grid";
import  {FaPlay, FaCog} from 'react-icons/fa';
import toast from 'react-hot-toast';

export class DataTable extends React.Component {

    columns = [
        { field: 'songName', headerName: 'Nombre', width: 175 },
        { field: 'songAuthor', headerName: 'Autor', width: 175},
        { field: 'songAlbum', headerName: 'Album', width: 250},
        { field: 'creationAuthor', headerName: 'Creador', width: 200},
        {
            field: "Settings",
            width: 135,
            renderCell: (cellValues) => {
              return (
                <Button3
                  variant="contained"
                  color="primary"
                  onClick={(event) => {
                   this.editSong(event, cellValues);
                  }}
                >
                  <FaCog />
                </Button3>
              );
            }
        },
        {
            field: "Play",
            width: 105,
            renderCell: (cellValues) => {
              return (
                <Button3
                  variant="contained"
                  color="primary"
                  onClick={(event) => {
                   this.playSong(event, cellValues);
                  }}
                >
                  <FaPlay />
                </Button3>
              );
            }
        },
      ];
      
    data = []//[{id:"1","songName":"Fuentes de Ortiz","songAuthor":"Ed Maverick","songAlbum":"Mix Pa Llorar en Tu Cuarto","songLyrics":"songLyrics","creationAuthor":"angelortizv","creationDate":"09/08/2021 18:52:00","modificationAuthor":"angelortizv","modificationDate":"09/08/2021 20:52:00"},{id:"2","songName":"Forever Alone","songAuthor":"Paulo Londra","songAlbum":"Homerun","songLyrics":"songLyrics","creationAuthor":"angelortizv","creationDate":"09/08/2021 18:52:00","modificationAuthor":"joseagus00","modificationDate":"09/08/2021 21:52:00"}];

    playSong = (param, event) => {
        console.log('asdasdsadasdas')
    };

    editSong = (param, cellValues) => {
        if(localStorage.getItem('userType') === 'basic'){
            toast.error('Su cuenta es básica');
        } else{ 
            localStorage.setItem('songIdToEdit', cellValues.id);
            window.location.href='/app/songs/edit/'+cellValues.id;
        }
    };
  
    render(){
        if (!this.props.rows) {
            return (
                <>
                <DataGrid
                    rows={this.data}
                    columns={this.columns}
                    pageSize={7}    
                    disableSelectionOnClick
                />
                </>
            )

        }
        return (
            <div style={{ height: 480, width: '100%' }}>
                <DataGrid
                    rows={this.props.rows}
                    columns={this.columns}
                    pageSize={7}     
                    disableSelectionOnClick           
                />
            </div>
      
          )

    }
  }


export default DataTable;
