import React from "react";

// components

import CardStats from "../../Cards/Profile/CardStats";

export default function SessionStats() {
  return (
    <>
      {/* Header */}

      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 ">
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PUNTOS EN ESTA PARTIDA"
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
                  statSubtitle="PRECISIÓN"
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
                  statSubtitle="PALABRAS ACERTADAS"
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
                  statSubtitle="PALABRAS FALLADAS"
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
