import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { SigninClient } from "../../clients/SigninClient";
import { sleep } from "../../components/utils/Sleep";
import { useHistory } from "react-router-dom";

export default function Register() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [mail, setMail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');


  const handleUsernameInput = async(e) => { var value = e.target.value; setUsername(value);  }
  const handlePasswordInput = async(e) => { var value = e.target.value; setPassword(value);  }
  const handleFullNameInput = async(e) => { var value = e.target.value; setFullName(value);  }
  const handleLocationInput = async(e) => { var value = e.target.value; setLocation(value);  }
  const handleMailInput = async(e) => { var value = e.target.value; setMail(value);  }
  const handleProfilePictureInput = async(e) => { var value = e.target.value; setProfilePicture(value);  }

  let signInClient = new SigninClient();
  let history = useHistory();


  const signup = async()  => {
    if(username === '' || password === '' || fullName === '' || location === '' || mail === '' || profilePicture === '' ){
      toast.error('Debe llenar todos los espacios');
    } else {
      const response = await signInClient.createUser(username,password, fullName, location, mail, profilePicture);
      switch (response) {
        case '⚠️ There is already a user with the given id ...':
            toast.error('Ya existe un usuario con el mismo id. \nIntente de nuevo...');
            break;
        case '☑️ The user was created successfully ... ':
            //toast.success("Usuario creado exitosamente ");
            toast(
              "👏 Usuario creado exitosamente \n Revise su correo con las credenciales propocionadas.",
              {
                duration: 6000,
              }
            );
            break;
        default:
            break;
    }
    }
  }


  return (
<>
        <div><Toaster/></div>
        <div className="container mx-auto h-full" >
            <div className="flex content-center items-center justify-center h-full" > 
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0" >
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-black-2 text-center mb-3 font-bold" style={{paddingTop: '35px'}}>
                    <h1 className="text-white" style={{paddingBottom:'35px'}}>Registro de Usuarios </h1>
                    </div>
                    <form>
                    <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Nombre de Usuario
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="username"
                        onChange={handleUsernameInput}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Contraseña
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="password"
                        onChange={handlePasswordInput}
                        />
                    </div>
                    <hr></hr>
                    <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Nombre Completo
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="John Doe Doe"
                        onChange={handleFullNameInput}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Ubicación
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="location"
                        onChange={handleLocationInput}
                        />
                    </div>
                    <div className="w-full lg:w-12/12 px-4 mb-3" >
                        <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Correo Electrónico
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="mail"
                        onChange={handleMailInput}
                        />
                    </div>
                    <div className="w-full lg:w-12/12 px-4 mb-3" >
                        <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Imagen de Perfil
                        </label>
                        <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="profilePicture"
                        onChange={handleProfilePictureInput}
                        />
                    </div>

                    <div className="w-full lg:w-12/12 px-4 mb-3" style={{paddingBottom:'20px',paddingTop:'10px'}}>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-spotify-green ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600" style={{paddingLeft:'10px'}}>
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-spotify-green"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>


                    
                    <div className="w-full lg:w-12/12 px-4 mb-3" style={{paddingBottom:'35px'}}>
                        <button
                        className="bg-spotify-green active:bg-spotify-dark-green text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={signup}
                        >
                        Crear Usuario
                        </button>
                    </div>
                    </div>
                    </form>
                </div>
                </div>


            </div>
            </div>
        </div>
        </>
  );
}
