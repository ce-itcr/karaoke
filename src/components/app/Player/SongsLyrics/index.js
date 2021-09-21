import React, { useState, useEffect } from "react";
import Lyric from "./lyric";

const SongsLyrics = (props) => {
  const [currentTime, setCurrentTime] = useState(1000);


  const songLyrics = localStorage.getItem('songLyrics');

  const update = () => {
    setCurrentTime(currentTime + 1000);
    console.log("update");
  };

  useEffect(() => {
    const cleanup = setInterval(update, 1000);
    return () => {
      clearInterval(cleanup);
    };
  }, [currentTime]);

  return (
    <div>
      <Lyric currentTime={currentTime} songLyrics={songLyrics}/>
    </div>
  );
}

export default SongsLyrics;