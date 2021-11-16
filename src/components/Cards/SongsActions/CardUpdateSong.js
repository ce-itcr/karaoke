import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import toast from "react-hot-toast";
import { SongsClient } from "../../../clients/SongsClient";
import { useHistory } from "react-router-dom";
import { sleep } from "../../utils/Sleep";

const customStyles = { content: { backgroundColor: '#242424', color: '#fff', top: '50%', left: '58%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-80%, -50%)' }, };


export default function CardUpdateSong(props) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [songData, setSongData] = useState({});
  const [songName, setSongName] = useState('');
  const [songAuthor, setSongAuthor] = useState('');
  const [songAlbum, setSongAlbum] = useState('');
  const [songCover, setSongCover] = useState('');
  const [songMp3, setSongMp3] = useState('');
  const [songLRCLyrics, setSongLRCLyrics] = useState('');

  const openModal = () => {setIsOpen(true)};
  const closeModal = () => {setIsOpen(false)};

  let history = useHistory();
  let songsClient = new SongsClient();


  const handleSongCover = async(e) => { var value = e.target.value; setSongCover(value);}
  const handleSongMp3 = async(e) => { var value = e.target.value; setSongMp3(value);}
 
  useEffect(() => { 
    getSongData();
  }, [])


  const getSongData = async() => {
    const response = await songsClient.getSongById(props.songId);
    setSongData(response.data);
    setSongName(response.data.songName);
    setSongAlbum(response.data.songAlbum);
    setSongAuthor(response.data.songAuthor);
    setSongLRCLyrics(response.data.songLRC);
    setSongMp3(response.data.songMp3);
    setSongCover(response.data.songCover);
  }

  const updateSong = async() => {
    await songsClient.updateSong(props.songId, songMp3, songCover, songLRCLyrics, localStorage.getItem('currentUsername')).then(
        toast.success('Canción actualizada exitosamente'),
    );
    sleep(2500).then(()=>{
        history.push('/app');
      }) 
  }



  const verifyInputData = () => {
      if(songMp3 === ''){ setSongName(songData.songMp3) } 
      if(songCover === ''){ setSongCover(songData.songCover) } 
      if(songLRCLyrics === ''){ setSongLRCLyrics(songData.songLRC) } 
      else {
          openModal();
      }
  }

  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      toast.success('El archivo fue subido exitosamente');
      //console.log(text)
      setSongLRCLyrics(text)

    };
    reader.readAsText(e.target.files[0])
  }


  return(
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0">
        <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="bg-spotify-grey  text-xl font-bold">Actualizar {songName} por {songAuthor} </h6>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información General 
            </h6>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    disabled="true"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={songName}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                  >
                    Autor
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={songAuthor}
                    disabled="true"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                  >
                    Album
                  </label>
                  <input
                    type="text"
                    defaultValue={songAlbum}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    disabled="true"
                  />
                </div>
              </div>



            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Reproducción de Canción
            </h6>
            <div className="flex flex-wrap">

            <div className="w-full lg:w-10/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                  >
                    Link de Cover Album
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={songCover}
                    onChange={handleSongCover}
                  />
                </div>
              </div>
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                  >
                    Link de Canción MP3
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={songMp3}
                    onChange={handleSongMp3}
                  />
                </div>
              </div>
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-white text-xs font-bold mb-2"
                  >
                    Letra de Canción en formato LRC
                  </label>

                  <input
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => showFile(e)}
                  />
                </div>
              </div>
       
            </div>
            <div className="w-full lg:w-8/12 px-4" style={{marginLeft: 'auto', paddingTop:'25px'}}>
                <button
                  type="button"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-spotify-green active:bg-spotify-dark-green uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  onClick={verifyInputData}
                >
                  <i class="fas fa-edit"></i> Actualizar Canción
                </button>
              </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

          </form>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <h2><b>karaoke! v2.0</b></h2>
            <div>¿Está seguro que desea actualizar la canción con las especificaciones indicada?</div>
            <form style={{marginTop:'20px'}}>
              <button onClick={closeModal} style={{marginRight:'20px', marginLeft:'330px', color:'#d4443c'}}>Cancelar</button>
              <button type="button" onClick={updateSong} style={{color:'#1db954'}}>Actualizar Canción</button>
            </form>
        </Modal>
        </div>
      </>
  );
}
