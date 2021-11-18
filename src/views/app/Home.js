import React from "react";
import { useHistory } from "react-router-dom";

// components
import CardTableSongs from "../../components/Cards/CardTableSongs";
import ProgressBar from "../../components/utils/ProgressBar";

export default function Home() {

  let history = useHistory();

  if(localStorage.getItem('currentUsername' ===  '')){
    history.push('/auth')
  }

  return (
    <>
      <ProgressBar/>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableSongs />
        </div>
      </div>
    </>
  );
}
