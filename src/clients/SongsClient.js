import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "https://karaokeapi.josevenegasv.com/karaoke/getAllSongs"
        return await axios(url)
        return response
    }

    async getSongById(songId){
        const url = `https://karaokeapi.josevenegasv.com/karaoke/getSong/{"id":"` + songId + `"}`
        return await axios(url)
    }

    async getSongsByName(songName){
        const url = `https://karaokeapi.josevenegasv.com/karaoke/search/{"category":"songName", "filter":"` + songName + `"}`
        return await axios(url)
    }

    async getSongsByAuthor(songAuthor){
        const url = `https://karaokeapi.josevenegasv.com/karaoke/search/{"category":"songAuthor", "filter":"` + songAuthor + `"}`
        return await axios(url)
    }

    async getSongsByAlbum(songAlbum){
        const url = `https://karaokeapi.josevenegasv.com/karaoke/search/{"category":"songAlbum", "filter":"` + songAlbum + `"}`
        return await axios(url, {params: {"songAlbum": songAlbum}})
    }

    async getSongsByLyrics(songLyrics){
        const url = `https://karaokeapi.josevenegasv.com/karaoke/search/{"category":"songLRC", "filter":"` + songLyrics + `"}`
        return await axios(url, {params: {"songLyrics": songLyrics}})
    }


    async postSong(songName, songAuthor, songAlbum, creationAuthor, songMP3, songLRC, songCover){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"id":songName+"&"+songAuthor, "songName": songName,"songAuthor":songAuthor,"songAlbum":songAlbum,"creationAuthor":creationAuthor, "songMp3":songMP3, "songLRC":songLRC, "songCover":songCover})
        };
        fetch('https://karaokeapi.josevenegasv.com/karaoke/createSong/', requestOptions)
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
        fetch(`https://karaokeapi.josevenegasv.com/karaoke/updateSong/{"id":"` + songId + `"}`, requestOptions)
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
        fetch(`https://karaokeapi.josevenegasv.com/karaoke/deleteSong/{"id":"` + songId + `"}`, requestOptions)
            .then(
                function(response) {
                response.text().then(function(data) {
                    //alert(data)
                });
                })   
    } 
}