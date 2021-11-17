import React, { useEffect, useState } from "react";
import { ProfileClient } from "../../clients/ProfileClient.js";

// components

import CardStats from "../Cards/Profile/CardStats.js";

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
    setPlayedSongs(response.data.playedSongs.length);
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
                  statSubtitle="CANCIONES REPRODUCIDAS"
                  statTitle={playedSongs}
                  statIconName="fas fa-music"
                  statIconColor="bg-black-2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ARTISTAS FAVORITOS"
                  statTitle={favoriteArtists}
                  statIconName="fas fa-users"
                  statIconColor="bg-black-2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MAYOR DIFICULTAD"
                  statTitle={greaterDifficulty}
                  statIconName="fas fa-plus"
                  statIconColor="bg-black-2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MENOR DIFICULTAD"
                  statTitle={lessDifficulty}
                  statIconName="fas fa-minus"
                  statIconColor="bg-black-2"
                />
              </div>
            </div>
          </div>
    </>
  );
}
