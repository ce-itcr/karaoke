import React from 'react';
import { InfoContainer2, InfoContainer3, InfoWrapper } from '../Player/PlayerElements';
import PlayerBottom from './PlayerBottom';
import SongsLyrics from './SongsLyrics';
import ProgressBar from '../../utils/ProgressBar';

export class ExternalPlayer extends React.Component {

    state = {
        form:{
            currentSongIndex: '',

        }
    }
    src = localStorage.getItem('songMp3');
    
    render(){
        //alert(JSON.stringify(this.props.songData))
        console.log(this.props)
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

export default ExternalPlayer;
