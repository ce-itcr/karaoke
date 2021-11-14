import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { ProfileClient } from "../../../clients/ProfileClient";
import { sleep } from "../../utils/Sleep";

// components

export default function CardProfile() {

  let profileClient = new ProfileClient();
  const [userData, setUserData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async() => {
      const currentData = await profileClient.getUserData(localStorage.getItem('currentUsername'));
      setUserData(currentData.data[0]);
  }

  const logout = () => {
        toast.success('Cerrando Sesión ....')
        localStorage.removeItem('activeSession');
        localStorage.setItem('currentUsername', '');
        localStorage.setItem('currentPassword', '');
        sleep(2500).then(()=>{
            history.push('/auth');
          })  
    }


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-6">
        <div className="px-6">
            <div className=" py-4 w-full  flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("../../../assets/images/profilePicture.png").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                />
              </div>
            </div>
          <div className="text-center mt-12">

              
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {userData.fullName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
              <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>{" "}
              @{userData.username}
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {userData.location}
            </div>
          </div>
          <div className=" py-6 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="mt-12">
                <button 
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  type="button"
                  onClick={logout}
                >
                    <i class="fas fa-sign-in-alt"></i> Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
