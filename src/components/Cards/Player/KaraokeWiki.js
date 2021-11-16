import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import api from "../../../clients/ArtistInfo";
import { sleep } from "../../utils/Sleep";

export default function KaraokeWiki(props) {

    const [artistName, setArtistName] = useState('');
    const [bornYear, setBornYear] = useState('');
    const [diedYear, setDiedYear] = useState('');
    const [formedYear, setFormedYear] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [genre, setGenre] = useState('');
    const [artistThumb, setArtistThumb] = useState('');
    const [biography, setBiography] = useState('');


    useEffect(() => {
        sleep(500).then(()=>{
            loadArtistInfo();
          })  
    }, [])

    const loadArtistInfo = async() => {
        const response = await api.get('/search.php', {
            params: {
                s: localStorage.getItem('currentSession-songAuthor')
            }
        })
        let info = response.data.artists;
        if(info === undefined) {
            toast.error('No se encontró información asociada para ' + props.songAuthor);
        } else {
            console.log(response);
            //setArtistName(info[0].strArtist);
            //setBornYear(info[0].intBornYear);
            //setDiedYear(info[0].intDiedYear);
            //setFormedYear(info[0].intFormedYear);
            //setCountry(info[0].strCountry);
            //setWebsite(info[0].strWebsite);
            //setGenre(info[0].strGenre);
            //setArtistThumb(info[0].strArtistThumb);
            setBiography(info[0].strBiographyEN);

            if(info[0].strArtist === null){setArtistName('----')} else{ setArtistName(info[0].strArtist); }
            if(info[0].strArtistThumb === null){setArtistThumb('----')} else{ setArtistThumb(info[0].strArtistThumb); }
            if(info[0].intBornYear === null){setBornYear('----')} else{ setBornYear(info[0].intBornYear); }
            if(info[0].intDiedYear === null){setDiedYear('----')} else{ setDiedYear(info[0].intDiedYear); }
            if(info[0].intFormedYear === null){setFormedYear('----')} else{ setFormedYear(info[0].intFormedYear); }
            if(info[0].strCountry === null){setCountry('----')} else{ setCountry(info[0].strCountry); }
            if(info[0].strGenre === null){setGenre('----')} else{ setGenre(info[0].strGenre); }
            if(info[0].strWebsite === null){setWebsite('----')} else{ setWebsite(info[0].strWebsite); }
            if(info[0].strBiographyEN === null){setBiography('----')} else{ setBiography(info[0].strBiographyEN); }
            if(info[0].strFacebook === null){setFacebook('----')} else{ setFacebook(info[0].strFacebook); }

        }
    } 

    return(
        <>
            <Toaster/>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 mt-6">
                <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-white text-xl font-bold">Acerca de {props.songAuthor}</h6>
                </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <section style={{paddingTop:'85px'}}>
                    <div >
                        <div >
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                <img
                                    alt="..."
                                    src={artistThumb}
                                    //src={require("assets/img/team-2-800x800.jpg").default}
                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                <button
                                    className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Connect
                                </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                    {bornYear}
                                    </span>
                                    <span className="text-sm text-blueGray-400">
                                    Nacimiento
                                    </span>
                                </div>
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                    {diedYear}
                                    </span>
                                    <span className="text-sm text-blueGray-400">
                                    Muerte
                                    </span>
                                </div>
                                <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-white">
                                    {formedYear}
                                    </span>
                                    <span className="text-sm text-blueGray-400">
                                    Lanzamiento
                                    </span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-center mt-12">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-white mb-2">
                                {artistName}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>{" "}
                                {country}
                            </div>
                            <div className="mb-2 text-white mt-10">
                                <i className="fas fa-music mr-2 text-lg text-blueGray-400"></i>
                                Género Musical: {genre}
                            </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-md leading-relaxed text-white">
                                    {biography}
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-md leading-relaxed text-white">
                                    <i className="fa fa-facebook mr-2 text-lg text-white"></i>{" "}
                                    Facebook:<a href={facebook} className="text-spotify-green">{facebook}</a>
                                </p>
                                </div>
                                <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-md leading-relaxed text-white">
                                    <i className="fa fa-facebook mr-2 text-lg text-white"></i>{" "}
                                    Sitio Web:<a href={website} className="text-spotify-green">{website}</a>
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        </>
    )

}