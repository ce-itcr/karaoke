import React from 'react'
import { Img } from '../../app/Profile/ProfileElements'

function Details(props) {
    return (
        
        <div className="c-player--details">
            <div className="details-img">
                <Img src={props.song.img_src} alt="Cover Image" />
            </div>
            <h3 className="details-title">{props.song.title}</h3>
            <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    )
}

export default Details
