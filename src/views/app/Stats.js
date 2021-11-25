import React, { useEffect } from "react";

// components

import CardProfile from "../../components/Cards/Profile/CardProfile.js";
import CardProfileUpdate from "../../components/Cards/Profile/CardProfileUpdate.js";
import CardSongsPlayed from "../../components/Cards/Profile/CardSongsPlayed.js";
import GreaterDifficulty from "../../components/Cards/Profile/Words/GreaterDifficulty.js";
import LessDifficulty from "../../components/Cards/Profile/Words/LessDifficulty.js";
import ProgressBar from "../../components/utils/ProgressBar.js";
import CardLineChart from "../../components/Cards/Profile/CardLineChart.js";
import CardBarChart from "../../components/Cards/Profile/CardBarChart.js";


export default function Stats() {
  useEffect(() => {
    document.title = 'karaoke! - Estadísticas: '  + localStorage.getItem('currentUsername');
  })
  
  return (
    <>
      <ProgressBar/>
      <div className="flex flex-wrap">
       <div className="w-full lg:w-12/12 px-4">
          <CardSongsPlayed />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <GreaterDifficulty />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <LessDifficulty />
        </div>
      </div>
    </>
  );
}
