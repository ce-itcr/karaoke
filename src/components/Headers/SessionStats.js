import React from "react";

// components

import CardStats from "../Cards/CardStats";

export default function SessionStats(props) {
  return (
    <>
      {/* Header */}

      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 ">
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PUNTOS EN ESTA PARTIDA"
                  statTitle={props.currentScore + ' puntos'}
                  statIconName="fas fa-music"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-spotify-green"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PRECISIÓN"
                  statTitle={props.currentPrecision + ' %'}
                  statIconName="fas fa-percentage"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PALABRAS ACERTADAS"
                  statTitle={props.currentRight + ' palabras'}
                  statIconName="fas fa-plus"
                  statIconColor="bg-black-2"
                  statPercentColor="font-semibold text-xl text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PALABRAS FALLADAS"
                  statTitle={props.currentMissing + ' palabras'}
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
