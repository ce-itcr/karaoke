import React, { useEffect, useRef, useState } from "react";
import { SongsClient } from "../../clients/SongsClient.js";
import { StatsClient } from "../../clients/StatsClient.js";
import { useLocation, useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { Slider } from "@material-ui/core";
import VolumeDown from '@material-ui/icons/VolumeDown';
import { VolumeUp } from '@material-ui/icons';

// components
import KaraokeWiki from "../../components/Cards/Player/KaraokeWiki.js";
import SessionStats from "../../components/Headers/SessionStats.js";
import ProgressBar from "../../components/utils/ProgressBar.js";
import LyricsPlayer from "../../components/Cards/Player/LyricsPlayer.js";

import Details from "../../components/Cards/Player/MusicPlayer/Details"
import Controls from "../../components/Cards/Player/MusicPlayer/Controls"
import { ProfileClient } from "../../clients/ProfileClient.js";
import toast, { Toaster } from "react-hot-toast";
import { sleep } from "../../components/utils/Sleep.js";
import KaraokeSpeechRecognition from "../../components/Cards/Player/SpeechRecognition.js";
import { text } from "@fortawesome/fontawesome-svg-core";


const customStyles = { content: { backgroundColor: '#242424', color: '#fff', top: '50%', left: '58%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-80%, -50%)' }, };


export default function Player() {

  
  const audioEl = useRef(null);
  const location = useLocation();
  const lyrics = location.state.lyrics

  const [currentSong, setCurrentSong] = useState({});
  const [songToPlay, setSongToPlay] = useState({});
  const [curMill, setCurMill] = useState(1);
  const [currentTime, setCurrentTime] = useState(1000);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [modalOpen, setModalOpen] = useState();
  const [volume, setVolume] = useState(100);

  // session stats
  const [text, setText] = useState();
  const [score, setScore] = useState(0);
  const [precision, setPrecision] = useState(0);
  const [rightWords, setRightWords] = useState(0);
  const [missingWords, setMissingWords] = useState(0);

  //var text = "";
  //function setText (message) {
  //  text = message;
  //}

  const openSessionModal = () => {setModalOpen(true)};
  const closeSessionModal = () => {setModalOpen(false); setIsStop(false)};


  useEffect(() => {
    if(isPlaying){
      audioEl.current.play();
      const interval = setInterval(() => {
        //console.log(currentTime)
        setCurMill(curMill => curMill + 1);
        setCurrentTime(curMill*1000);
      },1000);
      return() => clearInterval(interval)
    } else{
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    if(isStop){
      openSessionModal();
    } else {
      closeSessionModal();
    }
  });


  let history = useHistory();

  let songsClient = new SongsClient();
  let statsClient = new StatsClient();
  let profileClient = new ProfileClient();

  useEffect(() => { 
    getSongData();
  }, [])

  useEffect(() => {
    document.title = 'karaoke! - En Reproducción: '  + currentSong.songName + ' por ' + currentSong.songAuthor;
  })

  const getSongData = async() => {
    let songId = window.location.pathname.slice(12).replace(/%20/, ' ');
    const songData = await songsClient.getSongById(songId);
    setSongToPlay({title: songData.data.songName, artist: songData.data.songAuthor, img_src: songData.data.songCover, src: songData.data.songMp3})
    setCurrentSong(songData.data);
  }

  const endSession = async() => {
    const statsResults = await statsClient.getScore(text, lyrics, localStorage.getItem("currentUsername"));
    setScore(statsResults["score"]);
    setPrecision(statsResults["accuracy"]);
    setRightWords(statsResults["successCounter"]);
    setMissingWords(statsResults["errorCounter"]);
    const playedSong = [currentSong.songName, currentSong.songAuthor, currentSong.songAlbum, currentSong.songCover, statsResults["score"]];
    const response = await profileClient.updatePlayedSongs(localStorage.getItem('currentUsername'),playedSong);
    if(response === '☑️ The song was modified successfully ... '){
      toast.success('Sesión guardada con exito');
      closeSessionModal();
    }
  }

  const handleChange = (event, newValue) => {
    setVolume(newValue);
    var fraction;
    if(newValue >= '100'){ fraction = "1.0"; }
    else { fraction = "0." + newValue; }
    var localAudio = document.getElementById("localAudio");
    localAudio.volume = fraction;

  };
 

  return (
    <>
      <Toaster/>
      <ProgressBar />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4" >
          <SessionStats currentScore={score} currentPrecision={precision} currentRight={rightWords} currentMissing={missingWords}/>
        </div>
        <div className="w-full lg:w-4/12 px-4" >
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 mt-6">
            <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-white text-xl font-bold">Reproductor</h6>
                </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

            <div className="c-player">
              <audio id="localAudio" src={currentSong.songMp3} ref={audioEl}></audio>
              
              <Details song={songToPlay} />
              <div className="footer__right">
                <VolumeDown className="text-white"/>
                <Slider 
                  className="text-spotify-green slider"
                  value={volume} 
                  onChange={handleChange} 
                />
                <VolumeUp className="text-white"/>
              </div>
              
              <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} isStop={isStop} setIsStop={setIsStop}/>

            </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 px-4" >
          <LyricsPlayer 
            songLyrics={lyrics}
            currentTime={currentTime}
            songName={currentSong.songName}
            songAuthor={currentSong.songAuthor}
          />
        </div>
        {/*<h1 className="text-spotify-green">{transcript}</h1>*/}
        <div className="w-full lg:w-12/12 px-4" >
          <KaraokeSpeechRecognition isPlaying={isPlaying} isStop={isStop} score={score} setScore={setScore} setText={setText}/> 
        </div>
        
        <div className="w-full lg:w-12/12 px-4" >
          <KaraokeWiki {...currentSong} />
        </div>
      </div>
      <Modal
            isOpen={modalOpen}
            onRequestClose={closeSessionModal}
            style={customStyles}
        >
            <h2><b>karaoke! v2.0</b></h2>
            <div>¿Está seguro que desea terminar con la sesión de reproducción actual?</div>
            <form style={{marginTop:'20px'}}>
              <button onClick={closeSessionModal} style={{marginRight:'20px',marginLeft:'200px', color:'#d4443c'}}>Cancelar</button>
              <button type="button" onClick={endSession} style={{color:'#1db954'}}>Terminar Sesión</button>
            </form>
        </Modal>
    </>
  );
}
