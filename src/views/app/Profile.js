import React, { useEffect } from "react";

// components

import CardProfile from "../../components/Cards/Profile/CardProfile.js";
import CardProfileUpdate from "../../components/Cards/Profile/CardProfileUpdate.js";
import ProgressBar from "../../components/utils/ProgressBar.js";


export default function Profile() {
  useEffect(() => {
    document.title = 'karaoke! - Perfil: '  + localStorage.getItem('currentUsername');
  })
  
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
      </div>
    </>
  );
}
