import React from 'react';
import { InfoContainer2, InfoContainer3, InfoWrapper } from '../Home/HomeScreenElements';
import PlayerBottom from './PlayerBottom';
import SongsLyrics from './SongsLyrics';
import ProgressBar from '../../utils/ProgressBar';

export class Player extends React.Component {

    state = {
        form:{
            currentSongIndex: '',

        }
    }
    src = localStorage.getItem('songMp3');
    
    render(){
        //alert(JSON.stringify(this.props.songData))
        const lyrics = this.props.songData.songLRC;
        console.log(lyrics)
        localStorage.setItem('songLyrics', lyrics)
        if(!this.props.songData){
            return(<></>)
        }

        return (
            <div >
                <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
                </InfoContainer2>
                <InfoContainer3>
                    <ProgressBar></ProgressBar>
                    <SongsLyrics songLyrics={lyrics}></SongsLyrics>
                </InfoContainer3>
                <PlayerBottom songData={this.props.songData}></PlayerBottom>
        
            
            </div>
        );
    }

}

export default Player;
