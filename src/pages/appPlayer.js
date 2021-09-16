import React, { Component } from 'react';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
import { SongsClient } from '../clients/SongsClient';
import Player from '../components/app/Player';


export class AppPlayer extends Component{

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
    const newData = await this.songsClient.getSongById(localStorage.getItem('songIdToPlay'));
    localStorage.setItem('songMp3', newData.data['0'].songMp3)
    this.setState({
        songsData: newData.data['0']
    });
    console.log(newData.data['0'])
  }


  render(){
    return (
      <>
        <Sidebar />
        <Navbar  />
        <Player songData={this.state.songsData}/>
        {/*<Footer />*/}
      </>
    )
  }

}

export default AppPlayer;
