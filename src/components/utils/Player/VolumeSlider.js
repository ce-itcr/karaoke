import React from 'react'
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Slider } from "@material-ui/core";
import VolumeDown from '@material-ui/icons/VolumeDown';
import { VolumeUp } from '@material-ui/icons';


const VolumeSlider = (props) => {

    const [value, setValue] = React.useState(100);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
        return (
            
            <div className="Footerb">
              <div className="footer__right">
                <PlaylistPlayIcon
                  className="footer__right__playlistIcon"
                  fontSize="large"
                />

                <VolumeDown />
                <Slider
                  className="footer__right__slider"
                  aria-labelledby="continuous-slider"
                  aria-label="Volume" 
                  value={value} 
                  onChange={handleChange} 
                />
                <VolumeUp/>
                </div>
                </div>
          );

}

export default VolumeSlider;
