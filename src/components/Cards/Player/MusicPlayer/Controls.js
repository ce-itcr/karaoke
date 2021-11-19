import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStop, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
    return (
        <div className="c-player--controls">
            {/*<button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>*/}
            <button className="play-btn" style={{marginRight:'20px'}} onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="stop-btn" onClick={() => props.setIsStop(!props.isPlaying)}>
                <FontAwesomeIcon icon={faStop} />
            </button>
            {/*<button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>*/}
        </div>
    )
}

export default Controls
