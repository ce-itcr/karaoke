import React from "react";

// components

import CardProfile from "../../components/Cards/Profile/CardProfile.js";
import CardProfileUpdate from "../../components/Cards/Profile/CardProfileUpdate.js";

export default function Player() {
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
