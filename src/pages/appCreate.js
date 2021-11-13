import React, { Component } from 'react';
import { ProfileClient } from '../clients/ProfileClient';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
import AddSong from '../components/app/AddSong';


export class AppCreate extends Component{

  constructor(){
    super();
    this.state = {
      profileData: []
    }
  }

  profileClient = new ProfileClient();

  componentDidMount(){
    this.loadProfileData();
  }  
  
  async loadProfileData(){
    const newData = await this.profileClient.getUserData(localStorage.getItem('currentUsername'), localStorage.getItem('currentPassword'));
    console.log(newData);
    this.setState({
      profileData: newData.data[0].userType
    });
    localStorage.setItem('userType', newData.data[0].userType)
  }



  render(){
    return (
      <>
        <Sidebar />
        <Navbar  />
        <AddSong userType={this.state.profileData}/>
        {/*<Footer />*/}
      </>
    )
  }

}

export default AppCreate;
