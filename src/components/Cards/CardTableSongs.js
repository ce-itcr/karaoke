import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import Modal from 'react-modal';


// components

import TableDropdown from "../Dropdowns/TableDropdown.js";
import { SongsClient } from "../../clients/SongsClient.js";
import CardCreateSong from "./SongsActions/CardCreateSong.js";

const customStyles = { content: { top: '50%', left: '58%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' }, };

export default function CardTableSongs({ color }) {

  const [songs, setSongs] = useState([]);
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('');
  const [createSongsIsOpen, setCreateSongsIsOpen] = useState(false);

  const openModal = () => {setCreateSongsIsOpen(true)};
  const closeModal = () => {setCreateSongsIsOpen(false)};

  let songsClient = new SongsClient();
  
  useEffect(() => { 
    getAllSongs();
  }, [])

  const getAllSongs = async() => {
    const currentSongs = await songsClient.getAllSongs();
    setSongs(currentSongs.data);
  }

  const handleInputChangeForFilter = async(e) => {
    var value = e.target.value;
    switch (value) {
      case 'Administrador':
        value = 'admin'
        break;
      case 'Personal Asistente':
        value = 'coordinationStaff'
        break;
      case 'Personal Administrativo':
        value = 'teachingStaff'
        break;
      case 'Operador':
        value = 'operator'
        break;  
      default:
        break;
    }
    setFilter(value);
  }

  const handleInputChangeForCategory = async(e) => {
    var value = e.target.value;
    setCategory(value);
  }

    const searchSongs = async() => {
    if(category === 'option' || category === ''){
      toast.error('Debe seleccionar alguna opción')
    } if(filter === ''){
      const response = await songsClient.getAllSongs();
      toast.success('Mostrando ' + response.data.length + ' resultado (s).')
      setSongs(response.data)
    } 
    else {
      switch (category) {
        case 'songName':
          const byNameResponse = await songsClient.getSongsByName(filter);
          if(byNameResponse.data.length === 0) {
            toast.error('No se encontraron resultados con las especificaciones indicadas ...');
          } else {
            toast.success('Mostrando ' + byNameResponse.data.length + ' resultado (s).')
            setSongs(byNameResponse.data)
          }
          break;
        case 'songAlbum':
          const byAlbumResponse = await songsClient.getSongsByAlbum(filter);
          if(byAlbumResponse.data.length === 0) {
            toast.error('No se encontraron resultados con las especificaciones indicadas ...');
          } else {
            toast.success('Mostrando ' + byAlbumResponse.data.length + ' resultado (s).')
            setSongs(byAlbumResponse.data)
          }
          break;
          case 'songAuthor':
            const byAuthorResponse = await songsClient.getSongsByAuthor(filter);
            if(byAuthorResponse.data.length === 0) {
              toast.error('No se encontraron resultados con las especificaciones indicadas ...');
            } else {
              toast.success('Mostrando ' + byAuthorResponse.data.length + ' resultado (s).')
              setSongs(byAuthorResponse.data)
            }
            break;      
        default:
          break;
      }
    }

  }

  const setCreateSongsButton = () => {
    if(localStorage.getItem('userType') !== 'premium' ){
      return(<></>)
    } else {
      return(
        <>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={openModal}
            >
              <i className="fas fa-plus"></i> Crear Canción
            </button>
        </>
      )
    }
    }

  const setSongLevel = (level) => {
    switch (level) {
        case 'hard':
            return(                  
            <div className="flex items-center">
                <span className="mr-2">Dificil</span>
                <div className="relative w-full">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                    <div
                    style={{ width: "90%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                    ></div>
                </div>
                </div>
            </div>)
        case 'medium':
            return(                  
                <div className="flex items-center">
                <span className="mr-2">Medio</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
                    <div
                      style={{ width: "60%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                    ></div>
                  </div>
                </div>
              </div>)
        case 'easy':
            return(                  
                <div className="flex items-center">
                <span className="mr-2">Facil</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-500">
                    <div
                      style={{ width: "20%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                    ></div>
                  </div>
                </div>
              </div>)            
    
        default:
            break;
    }
  }

  return (
    <>
          <Toaster />
      <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 ">
                <div className="relative w-full mb-3">
                    <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleInputChangeForFilter}
                    />
                </div>
            </div>
            <div className="w-full lg:w-3/12 " style={{paddingLeft:'20px'}}>
                <div className="relative w-full mb-3">
                    <select 
                        name="category" id="category"        
                        onChange={handleInputChangeForCategory}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                        <option value="option">Seleccione una opción</option>
                        <option value="songName">Nombre de la Canción</option>
                        <option value="songAuthor">Nombre del Autor</option>
                        <option value="songAlbum">Nombre del Album</option>
                        {/*<option value="songDifficulty">Dificultad</option>*/}
                    </select>
                </div>
            </div>
            <div className="w-full lg:w-3/12" style={{paddingLeft:'20px'}}>
            <div className="relative w-full mb-3">
                <button 
                  className="r sm:ml-1 text-white font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  type="button"
                  onClick={searchSongs}
                >
                    <a>
                        <i class="fas fa-sign-in-alt"></i> Buscar Cancion (es)
                    </a>
                </button>
              </div>
            </div>

        </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Listado de Canciones
              </h3>
            </div>
            {setCreateSongsButton()}
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Nombre 
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Autor
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Album
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Reproducciones
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Dificultad
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>

            {songs.map((item,index)=>{
                    return  <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img
                            src={item.songCover}
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                        ></img>
                        <span
                            className={
                            "ml-3  " +
                            +(color === "light" ? "text-blueGray-600" : "text-white")
                            }
                        >
                            {item.songName}
                        </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.songAuthor}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.songAlbum}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.played}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {setSongLevel(item.songLevel)}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                            <TableDropdown songId={item.id}/>
                        </td>
                    </tr>
                        
                })}


        
      
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={createSongsIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CardCreateSong/>
      </Modal>
    </>
  );
}

CardTableSongs.defaultProps = {
  color: "light",
};

CardTableSongs.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
