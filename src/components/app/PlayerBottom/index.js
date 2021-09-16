import React from 'react'
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Slider } from "@material-ui/core";
import MainPlayer from '../../utils/Player/MainPlayer';


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
                  <p>{songData.songAuthor}</p>
                </div>
              </div>
              <div className="footer__center">

                <SkipPreviousIcon className="footer__icon" />
                {/*<PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>*/}
                <MainPlayer 
                    currentSongIndex={0} 
                    setCurrentSongIndex={0} 
                    songs={songs}
                />
                <SkipNextIcon className="footer__icon" />
              </div>
              <div className="footer__right">
                <PlaylistPlayIcon
                  className="footer__right__playlistIcon"
                  fontSize="large"
                />
                <VolumeDownIcon />
                <Slider
                  className="footer__right__slider"
                  aria-labelledby="continuous-slider"
                />
              </div>
            </div>
          );

}

export default PlayerBottom;
