import React from 'react';
import { InfoContainer, InfoContainer2, InfoWrapper } from '../Home/HomeScreenElements';
import PlayerBottom from '../PlayerBottom';

export class Player extends React.Component {

    state = {
        form:{
            currentSongIndex: '',

        }
    }
    src = localStorage.getItem('songMp3');



    
    render(){
        
        

        if(!this.props.songData){
            return(<></>)
        }


        return (
            <div >
                <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
                </InfoContainer2>
                <InfoContainer>

                <p>letra de la canción</p>
                        
                </InfoContainer>
                <PlayerBottom songData={this.props.songData}></PlayerBottom>
        
        
            </div>
        );
    }

}

export default Player;
