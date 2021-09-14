import React from 'react';
import { InfoContainer, InfoContainer2, InfoWrapper } from '../Home/HomeScreenElements';
import { Column1, Column2, InfoRow } from '../Profile/ProfileElements';
import MainPlayer from '../../utils/Player/MainPlayer';
import LyricsPlayer from '../../utils/Player/LyricsPlayer';

export class Player extends React.Component {

    state = {
        form:{
            currentSongIndex: '',

        }
    }
    src = localStorage.getItem('songMp3');



    
    render(){

        const songs = [
            {
              title: this.props.songData.songName,
              artist: this.props.songData.songAuthor + " - " + this.props.songData.songAlbum,
              img_src: this.props.songData.songCover,
              src: this.props.songData.songMp3
            }
          ]
        
        const songLyrics = this.props.songData.songLRC;
        

        if(!this.props.songData){
            return(<></>)
        }


        return (
            <div >
                <InfoContainer2 lightBg='false' id='background'>
                <InfoWrapper></InfoWrapper>
                </InfoContainer2>
                <InfoContainer>
                    <InfoWrapper>
                    <InfoRow imgStart='true'>
                        <Column1>
                            <LyricsPlayer 
                                songLyrics={songLyrics}
                            />

                        </Column1>
                        <Column2>
                            <MainPlayer 
                                currentSongIndex={0} 
                                setCurrentSongIndex={0} 
                                songs={songs}
                            />
                        </Column2>
                    </InfoRow>


                        
                    </InfoWrapper>
                </InfoContainer>
        
        
            </div>
        );
    }

}

export default Player;
