import React, { useEffect, useRef, useState } from "react";
import { SongsClient } from "../../clients/SongsClient.js";
import { useLocation } from "react-router-dom";

// components
import KaraokeWiki from "../../components/Cards/Player/KaraokeWiki.js";
import SessionStats from "../../components/Headers/SessionStats.js";
import ProgressBar from "../../components/utils/ProgressBar.js";
import LyricsPlayer from "../../components/Cards/Player/LyricsPlayer.js";

import Details from "../../components/Cards/Player/MusicPlayer/Details"
import Controls from "../../components/Cards/Player/MusicPlayer/Controls"

export default function Player() {

  const audioEl = useRef(null);

  const location = useLocation();
  const lyrics = location.state.lyrics

  const [currentSong, setCurrentSong] = useState({});
  const [songToPlay, setSongToPlay] = useState({});
  const [curMill, setCurMill] = useState(1);
  const [currentTime, setCurrentTime] = useState(1000);
  const [isPlaying, setIsPlaying] = useState(false);



  useEffect(() => {
    if(isPlaying){
      audioEl.current.play();
      const interval = setInterval(() => {
        //console.log(currentTime)
        setCurMill(curMill => curMill + 1);
        setCurrentTime(curMill*1000);
      },1000);
      return() => clearInterval(interval)
    } else{
      audioEl.current.pause();
    }
  });


  let songsClient = new SongsClient();

  useEffect(() => { 
    getSongData();
  }, [])

  const getSongData = async() => {
    let songId = window.location.pathname.slice(12).replace(/%20/, ' ');
    const songData = await songsClient.getSongById(songId);
    setSongToPlay({title: songData.data.songName, artist: songData.data.songAuthor, img_src: songData.data.songCover, src: songData.data.songMp3})
    setCurrentSong(songData.data);
  }
  

  return (
    <>
      <ProgressBar />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4" >
          <SessionStats {...currentSong}/>
        </div>
        <div className="w-full lg:w-4/12 px-4" >
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 mt-6">
            <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-white text-xl font-bold">Reproductor</h6>
                </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

            <div className="c-player">
              <audio src={currentSong.songMp3} ref={audioEl}></audio>
              <Details song={songToPlay} />
              <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
            </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 px-4" >
          <LyricsPlayer 
            songLyrics={lyrics}
            currentTime={currentTime}
            songName={currentSong.songName}
            songAuthor={currentSong.songAuthor}
          />
        </div>
        <div className="w-full lg:w-12/12 px-4" >
          <KaraokeWiki {...currentSong} />
        </div>
      </div>
    </>
  );
}
