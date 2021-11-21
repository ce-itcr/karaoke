import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import toast from "react-hot-toast";
import { sleep } from "../utils/Sleep";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { ProfileClient } from "../../clients/ProfileClient";

const customStyles = { content: { backgroundColor: '#242424', color: '#fff', top: '50%', left: '58%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-80%, -50%)' }, };

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const [userData, setUserData] = useState([]);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const openLogoutModal = () => {setLogoutModalOpen(true)};
  const closeLogoutModal = () => {setLogoutModalOpen(false)};

  let history = useHistory();
  let profileClient = new ProfileClient();

  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async() => {
      const currentData = await profileClient.getUserData(localStorage.getItem('currentUsername'));
      setUserData(currentData.data);
  }

  
  const logout = () => {
    toast.success('Cerrando Sesión ....');
    localStorage.removeItem('activeSession');
    localStorage.setItem('currentUsername', '');
    localStorage.setItem('currentPassword', '');
    sleep(2500).then(()=>{
        history.push('/auth');
      })  
    }


  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              //src={require("../../assets/images/profilePicture.png").default}
              src={userData.profilePicture}
            />
          </span>
        </div>
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
          href="/app/profile"
        >
          Perfil
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={openLogoutModal}
        >
          Cerrar Sesión
        </a>
      </div>
      <Modal
            isOpen={logoutModalOpen}
            onRequestClose={closeLogoutModal}
            style={customStyles}
        >
            <h2><b>karaoke! v2.0</b></h2>
            <div>¿Está seguro que desea cerrar sesión?</div>
            <form style={{marginTop:'20px'}}>
              <button onClick={closeLogoutModal} style={{marginRight:'20px',marginLeft:'200px', color:'#d4443c'}}>Cancelar</button>
              <button type="button" onClick={logout} style={{color:'#1db954'}}>Cerrar Sesión</button>
            </form>
        </Modal>
    </>
  );
};

export default UserDropdown;
