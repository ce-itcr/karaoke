import React from 'react';
import { Button3 } from './ButtonElement';
import {
    DataGrid,
  } from "@material-ui/data-grid";
import  {FaPlay, FaCog} from 'react-icons/fa';
import toast from 'react-hot-toast';

export class DataTable extends React.Component {

    columns = [
        {
            field: "songCover",
            headerName: "Portada",
            width: 150,
            renderCell: (params) => {
              return (
                <img 
                  width="100px" alt="Cover img" src={params.row.songCover}
                />
              );
            }
        },
        { field: 'songName', headerName: 'Nombre', width: 175 },
        { field: 'songAuthor', headerName: 'Autor', width: 175},
        { field: 'songAlbum', headerName: 'Album', width: 300},
        {
            field: "Settings",
            headerName: "Editar",
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
            headerName: "",
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
      
    data = [];

    playSong = (param, cellValues) => {
        localStorage.setItem('songIdToPlay', cellValues.id);
        window.location.href='/app/player/'+cellValues.id;
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
                    rowHeight={100}
                    rows={this.data}
                    columns={this.columns}
                    pageSize={9}    
                    disableSelectionOnClick
                />
                </>
            )

        }
        return (
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rowHeight={70}
                    rows={this.props.rows } 
                    columns={this.columns}
                    pageSize={8}     
                    disableSelectionOnClick           
                />
            </div>
      
          )

    }
  }


export default DataTable;
