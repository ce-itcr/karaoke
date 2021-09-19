import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "http://localhost:5000/karaoke/getAllSongs"
        const response =  await axios(url)
        return response
    }

    async getSongById(songId){
        const url = `http://localhost:5000/karaoke/getSong/{"id":"` + songId + `"}`
        const response =  await axios(url)
        return response
    }

    async getSongsByName(songName){
        const url = `http://localhost:5000/karaoke/getSong/{"songName":"` + songName + `"}`
        const response =  await axios(url)
        return response
    }

    async getSongsByAuthor(songAuthor){
        const url = `http://localhost:5000/karaoke/getSong/{"songAuthor":"` + songAuthor + `"}`
        const response =  await axios(url)
        return response
    }

    async getSongsByAlbum(songAlbum){
        const url = `http://localhost:5000/karaoke/getSong/{"songAlbum":"` + songAlbum + `"}`
        const response =  await axios(url, {params: {"songAlbum": songAlbum}})
        return response
    }

    async getSongsByLyrics(songLyrics){
        const url = `http://localhost:5000/karaoke/getSong/{"songLyrics":"` + songLyrics + `"}`
        const response =  await axios(url, {params: {"songLyrics": songLyrics}})
        return response
    }


    async postSong(songName, songAuthor, songAlbum, creationAuthor, songMP3, songLRC, songCover){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "songName": songName,"songAuthor":songAuthor,"songAlbum":songAlbum,"creationAuthor":creationAuthor, "songMp3":songMP3, "songLRC":songLRC, "songCover":songCover})
        };
        fetch('https://sheet.best/api/sheets/b5fc9c7a-0f86-43e6-a8c7-23881a278ddf/tabs/songs', requestOptions)
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
        fetch('https://sheet.best/api/sheets/b5fc9c7a-0f86-43e6-a8c7-23881a278ddf/tabs/songs/id/' + songId, requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    alert(data)
                });
                })   
    } 

    async deleteSong(songId){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch('https://sheet.best/api/sheets/b5fc9c7a-0f86-43e6-a8c7-23881a278ddf/tabs/songs/id/' + songId, requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    alert(data)
                });
                })   
    } 
}