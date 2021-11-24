import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
  return (
<>
        <div><Toaster/></div>
        <div className="container mx-auto h-full" >
            <div className="flex content-center items-center justify-center h-full" > 
            <div className="w-full lg:w-6/12 px-4">
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
                        onChange='{handleInputChangeForUserId}'
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
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-400 text-white bg-spotify-grey-2 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="password"
                        onChange='{handleInputChangeForPassword}'
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
                        onChange='{handleInputChangeForUserId}'
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
                        onChange='{handleInputChangeForUserId}'
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
                        onChange='{handleInputChangeForUserId}'
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
                        onClick='{verifyUser}'
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
