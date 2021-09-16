import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs"
        const response =  await axios(url)
        return response
    }

    async getSongById(songId){
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs/search?"
        const response =  await axios(url, {params: {"id": songId}})
        return response
    }

    async getSongsByName(songName){
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs/search?"
        const response =  await axios(url, {params: {"songName": songName}})
        return response
    }

    async getSongsByAuthor(songAuthor){
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs/search?"
        const response =  await axios(url, {params: {"songAuthor": songAuthor}})
        return response
    }

    async getSongsByAlbum(songAlbum){
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs/search?"
        const response =  await axios(url, {params: {"songAlbum": songAlbum}})
        return response
    }

    async getSongsByLyrics(songLyrics){
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs/search?"
        const response =  await axios(url, {params: {"songLyrics": songLyrics}})
        return response
    }

    async postSong(songName, songAuthor, songAlbum, songLyrics, creationAuthor){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "songName": songName,"songAuthor":songAuthor,"songAlbum":songAlbum,"songLyrics":songLyrics,"creationAuthor":creationAuthor })
        };
        fetch('https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/tabs/songs', requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    //alert(data)
                });
                })   
    } 
}