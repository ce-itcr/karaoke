import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs"
        const response =  await axios(url)
        return response
    }

    async getSongsByName(songName){
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/search?"
        const response =  await axios(url, {params: {"songName": songName}})
        return response
    }

    async getSongsByAuthor(songAuthor){
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/search?"
        const response =  await axios(url, {params: {"songAuthor": songAuthor}})
        return response
    }

    async getSongsByAlbum(songAlbum){
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/search?"
        const response =  await axios(url, {params: {"songAlbum": songAlbum}})
        return response
    }

    async getSongsByLyrics(songLyrics){
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/search?"
        const response =  await axios(url, {params: {"songLyrics": songLyrics}})
        return response
    }

    async postSong(songName, songAuthor, songAlbum, songLyrics, creationAuthor){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "songName": songName,"songAuthor":songAuthor,"songAlbum":songAlbum,"songLyrics":songLyrics,"creationAuthor":creationAuthor })
        };
        fetch('https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs', requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    //alert(data)
                });
                })   
    } 
}