import React from 'react';
import MainPlayer from '../../../utils/Player/MainPlayer';

const PlayerBottom = (props) => {


    const songData = props.songData;
    const songs = [
        {
          src: props.songData.songMp3
        }
      ]

        return (
            
            <div className="Footer">
                
              <div className="footer__left">
                <img
                  className="footer__albumLogo"
                  src={songData.songCover}
                  alt="album__logo"
                />
                <div className="footer__songinfo">
                  <h4>{songData.songName}</h4>
                  <p>{songData.songAuthor} | {songData.songAlbum}</p>
                </div>
              </div>

                {/*<PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>*/}
                <MainPlayer 
                    currentSongIndex={0} 
                    setCurrentSongIndex={0} 
                    songs={songs}
                />

            </div>
          );

}

export default PlayerBottom;
