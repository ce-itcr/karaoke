import React, { useEffect, useState } from "react";
import { ProfileClient } from "../../clients/ProfileClient.js";

// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats() {

  const [playedSongs, setPlayedSongs] = useState();
  const [favoriteArtists, setFavoriteArtists] = useState();
  const [greaterDifficulty, setGreaterDifficulty] = useState();
  const [lessDifficulty, setLessDifficulty] = useState();
 
  let profileClient = new ProfileClient();

  useEffect(() => {
    loadBasicStats();
  }, [])

  const loadBasicStats = async() => {
    const response = await profileClient.getUserData(localStorage.getItem('currentUsername'));
    let totalSongs = 0;
    for(var k in response.data.playedSongs){
      totalSongs += response.data.playedSongs[k][4];
    }
    setPlayedSongs(totalSongs);
    setFavoriteArtists(response.data.favoriteArtists.length);
    setGreaterDifficulty(response.data.greaterDifficulty.length);
    setLessDifficulty(response.data.lessDifficulty.length);
  }




  return (
    <>
      {/* Header */}

          <div style={{paddingBottom:'30px'}}>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOTAL REPRODUCCIONES"
                  statTitle={playedSongs + ' reproducciones'}
                  statIconName="fas fa-music"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ARTISTAS FAVORITOS"
                  statTitle={favoriteArtists + ' artistas'}
                  statIconName="fas fa-users"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MAYOR DIFICULTAD"
                  statTitle={greaterDifficulty + ' palabras'}
                  statIconName="fas fa-plus"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MENOR DIFICULTAD"
                  statTitle={lessDifficulty + ' palabras'}
                  statIconName="fas fa-minus"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-white"
                />
              </div>
            </div>
          </div>
    </>
  );
}
