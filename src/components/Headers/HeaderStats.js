import React from "react";

// components

import CardStats from "../Cards/Profile/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}

          <div style={{paddingBottom:'30px'}}>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CANCIONES REPRODUCIDAS"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-spotify-dark-green"
                  statDescripiron="Since last month"
                  statIconName="fas fa-music"
                  statIconColor="bg-black-2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ARTISTAS FAVORITOS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-spotify-dark-green"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-black-2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MAYOR DIFICULTAD"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-spotify-dark-green"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-plus"
                  statIconColor="bg-black-2"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MENOR DIFICULTAD"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-spotify-dark-green"
                  statDescripiron="Since last month"
                  statIconName="fas fa-minus"
                  statIconColor="bg-black-2"
                />
              </div>
            </div>
          </div>
    </>
  );
}
