import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs"
        const response =  await axios(url)
        return response
    }

    async getSongById(songId){
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/search?"
        const response =  await axios(url, {params: {"id": songId}})
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


    async postSong(songName, songAuthor, songAlbum, creationAuthor, songMP3, songLRC, songCover){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"id":songName+"&"+songAuthor, "songName": songName,"songAuthor":songAuthor,"songAlbum":songAlbum,"creationAuthor":creationAuthor, "songMp3":songMP3, "songLRC":songLRC, "songCover":songCover})
        };
        fetch('https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs', requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    //alert(data)
                });
                })   
    } 

    async updateSong(songId, songMP3, songLRC, modificationAuthor){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "songMp3":songMP3, "songLRC":songLRC, "modificationAuthor":modificationAuthor})
        };
        fetch('https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/id/' + songId, requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    //alert(data)
                });
                })   
    } 

    async deleteSong(songId){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch('https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/id/' + songId, requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    //alert(data)
                });
                })   
    } 
}