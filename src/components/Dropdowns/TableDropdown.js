import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import Modal from 'react-modal';
import { SongsClient } from "../../clients/SongsClient";
import { sleep } from "../utils/Sleep";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import CardUpdateSong from "../Cards/SongsActions/CardUpdateSong";

const customStyles = { content: { top: '50%', left: '58%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' }, };

const NotificationDropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const [removeSongsIsOpen, setRemoveSongsIsOpen] = useState(false);
  const [updateSongIsOpen, setUpdateSongIsOpen] = useState(false);

  const openRemoveModal = () => {setRemoveSongsIsOpen(true)};
  const closeRemoveModal = () => {setRemoveSongsIsOpen(false)};

  const openUpdateModal = () => {setUpdateSongIsOpen(true)};
  const closeUpdateModal = () => {setUpdateSongIsOpen(false)};

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let songsClient = new SongsClient();
  let history = useHistory();

  const removeSong = async() => {
    await songsClient.deleteSong(props.songId);
    toast.success("Canción eliminada correctamente.");
    sleep(2500).then(()=>{
        history.push('/app');
      }) 

  }
  const openPlayer = () => {
    history.push('/app/player/' + props.songId);
  }

  const setUserActions = () => {
    if(localStorage.getItem('userType') !== 'premium') {
      return(
        <>
        </>
      )
    } else {
      return(
        <>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={openUpdateModal}
        >
          <i class="fas fa-edit"></i>  Actualizar
        </a>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={openRemoveModal}
        >
          <i class="fas fa-trash"></i>  Eliminar
        </a>
        </>
      )
    }
  }

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={openPlayer}
        >
          <i class="fas fa-play"></i>  Reproducir
        </a>
        {setUserActions()}

      </div>
      <Modal
            isOpen={removeSongsIsOpen}
            onRequestClose={closeRemoveModal}
            style={customStyles}
        >
            <h2><b>karaoke! v2.0</b></h2>
            <div>¿Está seguro que desea eliminar la canción con el Id: {props.songId}?</div>
            <form style={{marginTop:'20px'}}>
            <input />
            <button onClick={closeRemoveModal} style={{marginRight:'20px', color:'red'}}>Cancelar</button>
            <button type="button" onClick={removeSong} style={{color:'green'}}>Eliminar Canción</button>
            </form>
        </Modal>
        <Modal
          isOpen={updateSongIsOpen}
          onRequestClose={closeUpdateModal}
          style={customStyles}
        >
          <CardUpdateSong songId={props.songId}/>
        </Modal>
    </>
  );
};

export default NotificationDropdown;
