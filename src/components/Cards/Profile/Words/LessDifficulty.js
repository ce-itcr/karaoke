import React, { useEffect, useState } from "react";
import { ProfileClient } from "../../../../clients/ProfileClient";

export default function LessDifficulty() {

    const [words, setWords] = useState([]);

    let profileClient = new ProfileClient();

    useEffect(() => {
        getLessDifficultyWords();
    },[])

    const getLessDifficultyWords = async() => {
        const response = await profileClient.getUserData(localStorage.getItem('currentUsername'));
        setWords(response.data.lessDifficulty)
    }

    return(
        <>
        <div className="relative flex flex-col min-w-0 break-words bg-spotify-grey text-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                    className={
                    "font-semibold text-lg " 
                    }
                >
                    Palabras de menor dificultad
                </h3>
                </div>
            </div>
            </div>

     
                <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="thead-light">
                    <tr>
                    <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                        Palabra
                        </th>
                        <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " >
                        Canción
                        </th>
                        <th className="bg-black-2 text-white border-spotify-grey px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " ></th>
                    </tr>
                    </thead>
                    <tbody>
                    {words.map((item,index)=>{
                        return  <tr key={index}>            
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {item[0]}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    {item[1]} - {item[2]}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2">{item[3]}%</span>
                                    <div className="relative w-full">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-spotify-green">
                                        <div
                                        style={{ width: item[3] + '%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-spotify-dark-green"
                                        ></div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                            </tr>})}
       
                
                    </tbody>
                </table>
                </div>


        </div>
        </>
    )
}