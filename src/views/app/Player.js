import React, { useEffect, useState } from "react";
import { SongsClient } from "../../clients/SongsClient.js";

// components
import ExternalPlayer from "../../components/app/Player";
import CardProfile from "../../components/Cards/Profile/CardProfile.js";
import CardProfileUpdate from "../../components/Cards/Profile/CardProfileUpdate.js";

export default function Player() {

  const [currentSong, setCurrentSong] = useState({});

  let songsClient = new SongsClient();

  useEffect(() => { 
    getSongData();
  }, [])

  const getSongData = async() => {
    let songId = window.location.pathname.slice(12).replace(/%20/, ' ');
    console.log(songId)
    const songData = await songsClient.getSongById(songId);
    console.log(songData.data[0])
    setCurrentSong(songData.data[0])
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">
          {/*<CardProfile />*/}
        </div>
        <div className="w-full lg:w-8/12 px-4">
          {/*<CardProfileUpdate />*/}
        </div>
      </div>
    </>
  );
}
