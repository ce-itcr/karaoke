import React from "react"
import MusicPlayer from 'react-responsive-music-player';

export default function KaraokeMusicPlayer(props) {

    const data = [{url:props.songMp3, cover: props.songCover, title: props.songName, artist: [props.songAuthor]}]


    return(
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-spotify-grey border-0 mt-6">
                <div className="rounded-t bg-spotify-grey mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-white text-xl font-bold">Reproductor</h6>
                </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <MusicPlayer playlist={data} mode="vertical" autoplay="false" width={320} btnColor="#1db954" progressColor="#1db954" style={{textColor:'#fff'}}/>
                </div>
            </div>
        </>
    )

}