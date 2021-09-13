import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
var columns = [
    { field: 'songName', headerName: 'Nombre', width: 150 },
    { field: 'songAuthor', headerName: 'Autor', width: 150},
    { field: 'songAlbum', headerName: 'Album', width: 200},
    //{ field: 'creationAuthor', headerName: 'Creado por', width:200}
  ];
  
var data = []//[{id:"1","songName":"Fuentes de Ortiz","songAuthor":"Ed Maverick","songAlbum":"Mix Pa Llorar en Tu Cuarto","songLyrics":"songLyrics","creationAuthor":"angelortizv","creationDate":"09/08/2021 18:52:00","modificationAuthor":"angelortizv","modificationDate":"09/08/2021 20:52:00"},{id:"2","songName":"Forever Alone","songAuthor":"Paulo Londra","songAlbum":"Homerun","songLyrics":"songLyrics","creationAuthor":"angelortizv","creationDate":"09/08/2021 18:52:00","modificationAuthor":"joseagus00","modificationDate":"09/08/2021 21:52:00"}];


export class DataTable extends React.Component {
  
    render(){
        if (!this.props.rows) {
            return (
                <>
                <DataGrid
                    rows={data}
                    columns={columns}
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
                    columns={columns}
                    pageSize={7}     
                    disableSelectionOnClick           
                />
            </div>
      
          )

    }
  }


export default DataTable;
