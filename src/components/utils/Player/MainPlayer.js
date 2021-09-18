import React, {useState, useRef, useEffect} from 'react'
import {toast, Toaster} from 'react-hot-toast';
import Controls from './Controls';
import { Slider } from "@material-ui/core";
import VolumeDown from '@material-ui/icons/VolumeDown';
import { VolumeUp } from '@material-ui/icons';


const MainPlayer = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [value, setValue] = useState(100);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        var localAudio = document.getElementById("localAudio");
        if(newValue < 25){
            localAudio.volume = 0.2;
        } else if(newValue > 30 && newValue < 70){
            localAudio.volume = 0.5;
        } else {
            localAudio.volume = 1.0;
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
            toast.success("Reproductor en pausa...")
        }
    });

    return (
        <>
            <div className="footer__center">

                <div className="c-player">
                <Toaster/>
                <audio id="localAudio" src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
                <div className="footer__center">
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
                    </div>
                </div>
            </div>
        

            <div className="footer__right">
  

                <VolumeDown/>
                <Slider
                  className="footer__right__slider"
                  aria-labelledby="continuous-slider"
                  aria-label="Volume" 
                  value={value} 
                  onChange={handleChange} 
                />
                <VolumeUp/>
              </div>
        
        </>



   


        
    )
}

export default MainPlayer;
