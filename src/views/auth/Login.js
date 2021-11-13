import React, { useState } from "react";
import { SigninClient } from "../../clients/SigninClient";
import {toast, Toaster} from 'react-hot-toast';


export default function Login() {


    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    let signinClient = new SigninClient(); 

    const handleInputChangeForUserId = async(e) => {
        var value = e.target.value;
        setUserId(value);
    }

    const handleInputChangeForPassword = async(e) => {
        var value = e.target.value;
        setPassword(value);
    }

    const verifyUser = async() => {
        localStorage.setItem('currentUsername', userId);
        localStorage.setItem('currentPassword', password);
        const response = await signinClient.verifyUser(userId, password);
        localStorage.setItem('userType', response.data.userType)
  
        
        if(response.data.length === 0){
            toast.error("Nombre de usuario o contraseña incorrecta.");
        } else{
            toast.success("Bienvenido " + userId);
            window.location.assign('/app')
        }    
    }
    

    return (
        <>
        <div><Toaster/></div>
        <div className="container mx-auto h-full" >
            <div className="flex content-center items-center justify-center h-full" > 
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0" >
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold" style={{'marginTop': `30px`}}>
                    <small>Inicio de Sesión | karaoke! v2.0</small>
                    </div>
                    <form>
                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Nombre de Usuario
                        </label>
                        <input
                        type="string"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="username"
                        onChange={handleInputChangeForUserId}
                        />
                    </div>

                    <div className="relative w-full mb-3">
                        <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Contraseña
                        </label>
                        <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="password"
                        onChange={handleInputChangeForPassword}
                        />
                    </div>
                    <div className="text-center mt-6" style={{'marginBottom': `20px`}}>
                        <button
                        className="bg-blueGray-700 active:bg-blueGray-600 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={verifyUser}
                        >
                        Iniciar Sesión
                        </button>
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
