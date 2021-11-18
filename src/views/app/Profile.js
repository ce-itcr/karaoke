import React from "react";

// components

import CardProfile from "../../components/Cards/Profile/CardProfile.js";
import CardProfileUpdate from "../../components/Cards/Profile/CardProfileUpdate.js";
import CardSongsPlayed from "../../components/Cards/Profile/CardSongsPlayed.js";
import GreaterDifficulty from "../../components/Cards/Profile/Words/GreaterDifficulty.js";
import LessDifficulty from "../../components/Cards/Profile/Words/LessDifficulty.js";
import ProgressBar from "../../components/utils/ProgressBar.js";

export default function Profile() {
  return (
    <>
      <ProgressBar/>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
        <div className="w-full lg:w-8/12 px-4">
          <CardProfileUpdate />
        </div>
        <div className="w-full lg:w-12/12 px-4">
          <CardSongsPlayed />
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
