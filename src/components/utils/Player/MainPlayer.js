import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';

const MainPlayer = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    return (
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <div>
                <Details song={props.songs[props.currentSongIndex]} />
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
            </div>

        </div>
    )
}

export default MainPlayer;
