import React, { useEffect, useState } from "react";
import { SongsClient } from "../../clients/SongsClient.js";
import KaraokeMusicPlayer from "../../components/Cards/Player/KaraokeMusicPlayer.js";

// components
import ExternalPlayer from "../../components/app/Player";
import CardProfile from "../../components/Cards/Profile/CardProfile.js";
import CardProfileUpdate from "../../components/Cards/Profile/CardProfileUpdate.js";
import KaraokeLyricsPlayer from "../../components/Cards/Player/KaraokeLyricsPlayer.js";
import KaraokeWiki from "../../components/Cards/Player/KaraokeWiki.js";
import SessionStats from "../../components/Cards/Player/SessionStats.js";

export default function Player() {

  const [currentSong, setCurrentSong] = useState({});


  let songsClient = new SongsClient();

  useEffect(() => { 
    getSongData();
  }, [])

  const getSongData = async() => {
    let songId = window.location.pathname.slice(12).replace(/%20/, ' ');
    const songData = await songsClient.getSongById(songId);
    setCurrentSong(songData.data)
  }
  

  return (
    <>


      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4" >
          <SessionStats {...currentSong}/>
        </div>
        <div className="w-full lg:w-4/12 px-4" >
          <KaraokeMusicPlayer {...currentSong}/>
        </div>
        <div className="w-full lg:w-8/12 px-4" >
          <KaraokeLyricsPlayer {...currentSong} />
        </div>
        <div className="w-full lg:w-12/12 px-4" >
          <KaraokeWiki {...currentSong} />
        </div>
      </div>
    </>
  );
}
