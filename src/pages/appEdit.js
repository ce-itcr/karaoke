import React, { Component } from 'react';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
import EditSong from '../components/app/EditSong';
import { SongsClient } from '../clients/SongsClient';


export class AppEdit extends Component{

  constructor(){
    super();
    this.state = {
      songsData: []
    }
  }

  songsClient = new SongsClient();

  componentDidMount(){
    this.loadSongsData();
  }  
  
  async loadSongsData(){
    const newData = await this.songsClient.getSongById(localStorage.getItem('songIdToEdit'));
    this.setState({
        songsData: newData.data['0']
    });
  }


  render(){
    return (
      <>
        <Sidebar />
        <Navbar  />
        <EditSong songsData={this.state.songsData}/>
        {/*<Footer />*/}
      </>
    )
  }

}

export default AppEdit;
