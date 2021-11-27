/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileClient } from "../../clients/ProfileClient";


export default function StatsSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [favoriteArtist, setFavoriteArtist] = useState([]);

  let profileClient = new ProfileClient();

  useEffect(() => {
    getUserStats();
  }, [])

  const getUserStats = async() => {
    const response = await profileClient.getUserData(localStorage.getItem('currentUsername'));
    //console.log(response)
    setFavoriteArtist(response.data.favoriteArtists);
  } 

  const favoriteArtistItems = favoriteArtist.map((artist) => 
    <>
      <li className=" text-left flex items-center" style={{paddingBottom:'5px'}}>
        <img className="h-10 w-10 bg-white rounded-full border" src={artist[1]}/>
        <span className="text-white ml-3">{artist[0]}</span>
      </li>
    </>)

  return (
    <>
      <nav className="right-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-black flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/app"
          >
            Estadísticas Generales
          </Link>
 
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Divider */}
            <hr className="my-4 md:min-w-full border-spotify-green" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Artistas Favoritos
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              {favoriteArtistItems}
              

            </ul>

          </div>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <a className="text-blueGray-400 align-middle text-xs mt-0 mb-2" href="https://github.com/ce-itcr/karaoke" target="_blank">
                    karaoke! v2.0 <br></br> Desarrollado por <b className="text-spotify-dark-green hover:text-spotify-green">ce-itcr</b>
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}
