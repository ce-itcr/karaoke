import React, { useState } from "react";
import { SigninClient } from "../../clients/SigninClient";
import {toast, Toaster} from 'react-hot-toast';
import { sleep } from "../../components/utils/Sleep";
import { useHistory } from "react-router-dom";


export default function Login() {

    let history = useHistory();

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
        const response = await signinClient.verifyUser(userId, password);
        
        if(response.data.length === 0){
            toast.error("Nombre de usuario o contraseña incorrecta.");
            sleep(2500).then(()=>{
                history.push('/auth');
              })  
        } else{
            toast.success("Bienvenido " + userId);
            localStorage.setItem('userType', response.data[0].userType)
            localStorage.setItem('currentUsername', userId);
            localStorage.setItem('currentPassword', password);
            localStorage.setItem('activeSession', true);

            sleep(1500).then(()=>{
                history.push('/app');
              })  
        }    
    }
    
    if(localStorage.getItem('activeSession')){
        history.push('/app');
    }

    return (
        <>
        <div><Toaster/></div>
        <div className="container mx-auto h-full" >
            <div className="flex content-center items-center justify-center h-full" > 
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0" >
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-black-2 text-center mb-3 font-bold" style={{paddingTop: '35px'}}>
                    <h1 className="text-white" style={{paddingBottom:'35px'}}>Inicio de Sesión | karaoke! v2.0</h1>
                    </div>
                    <form>
                    <div className="relative w-full mb-3">
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
                        onChange={handleInputChangeForUserId}
                        />
                    </div>

                    <div className="relative w-full mb-3" style={{paddingBottom:'35px'}}>
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
                        onChange={handleInputChangeForPassword}
                        />
                    </div>
                    <div className="text-center mt-6" style={{paddingBottom:'35px'}}>
                        <button
                        className="bg-spotify-green active:bg-spotify-dark-green text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
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
