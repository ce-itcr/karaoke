import React, { useEffect, useState } from "react";
import { ProfileClient } from "../../../clients/ProfileClient";

// components

export default function CardSongsPlayed() {

  const [playedSongs, setPlayedSongs] = useState([]);

  let profileClient = new ProfileClient();
  
  useEffect(() => {
    loadPlayedSongs();
  }, [])
  
  const loadPlayedSongs = async() => {
      const response = await profileClient.getUserData(localStorage.getItem('currentUsername'));
      setPlayedSongs(response.data.playedSongs);
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-spotify-grey text-white w-full mb-6 shadow-lg rounded" style={{marginTop:'20px'}}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " 
                }
              >
                Canciones Reproducidas
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Artista
                </th>
                <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Nombre
                </th>
                <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Album
                </th>
                <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Reproducciones
                </th>
                <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                  Mejor Puntaje
                </th>
              </tr>
            </thead>
            <tbody>
                {playedSongs.map((item,index)=>{
                    return  <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <img
                                src={item[3]}
                                className="h-8 w-8 bg-white rounded-full border"
                                alt="..."
                            ></img>
                            <span className="ml-3  " >
                                {item[1]}
                            </span>
                        </th>
                        <td className="text-spotify-green border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item[0]}
                        </td>
                        <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item[2]}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item[4]}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i className="fas fa-star text-spotify-green mr-4"></i>
                            {item[5]}
                        </td>
                    </tr>})}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
