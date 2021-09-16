import React, {useState, useRef, useEffect} from 'react'
import {toast, Toaster} from 'react-hot-toast';
import Controls from './Controls';

const MainPlayer = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            toast.success("Reproduciendo...")
        } else {
            audioEl.current.pause();
            toast.success("Reproductor en pausa...")
        }
    });

    return (

        <div className="c-player">
            <Toaster/>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <div>
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
            </div>

        </div>
    )
}

export default MainPlayer;
