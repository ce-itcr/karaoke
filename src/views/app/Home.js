import React from "react";

// components
import CardTableSongs from "../../components/Cards/CardTableSongs";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableSongs />
        </div>
      </div>
    </>
  );
}
