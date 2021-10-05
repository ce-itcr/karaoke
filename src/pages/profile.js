import React, { Component } from 'react';
import Navbar from '../components/app/Navbar';
import Sidebar from '../components/app/Sidebar';
import UserProfile from '../components/app/Profile';
import { ProfileClient } from '../clients/ProfileClient';

export class Profile extends Component{

  profileClient = new ProfileClient();

  constructor(){
    super();
    this.state = {
      profileData: []
    }
  }

  componentDidMount(){
    this.loadProfileData();
  }  
  
  async loadProfileData(){
    const newData = await this.profileClient.getUserData(localStorage.getItem('currentUsername'), localStorage.getItem('currentPassword'));
    //console.log(newData);
    this.setState({
      profileData: newData.data[0]
    });
  }

  render(){
    return (
      <>
        <Sidebar />
        <Navbar  />
        <UserProfile userData={this.state.profileData}/>
        {/*<Footer />*/}
      </>
    )
  }

}

export default Profile;
