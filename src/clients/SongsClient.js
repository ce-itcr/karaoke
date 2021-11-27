import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "https://songs-microservices.herokuapp.com/api/v1/songs/all"
        const response =  await axios(url)
        return response;
    }

    async getSongById(songId){
        const url = "https://songs-microservices.herokuapp.com/api/v1/songs/" + songId
        const response =  await axios(url)
        return response;
    }

    async searchSongs(category, filter) {
        const url = 'https://songs-microservices.herokuapp.com/api/v1/songs/search/{"category":"' + category + '","filter":"' + filter + '"}';
        const response =  await axios(url);
        return response.data;
    }


    async createSong(songName, songAuthor, songAlbum, creationAuthor, songMP3, songLRC, songCover){
        const requestUrl = 'https://songs-microservices.herokuapp.com/api/v1/songs/';
        const songData = {"songName":songName, "songAuthor":songAuthor, "songAlbum":songAlbum, "creationAuthor":creationAuthor, "songMp3": songMP3, "songLRC": songLRC, "songCover":songCover};
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(requestUrl, songData, headers)
          .catch((error) => {
            return(error.response);
          });
        return response.data;
    }

    async updateSong(songId, songMP3, songCover, songLRC, modificationAuthor) {
        const requestUrl = 'https://songs-microservices.herokuapp.com/api/v1/songs/' + songId;
        const userData = {"songMp3": songMP3, "songCover": songCover, "songLRC":songLRC, "modificationAuthor":modificationAuthor};
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.put(requestUrl, userData, headers)
          .catch((error) => {
            return(error.response);
          });
        return response.data;
    }

    async deleteSong(songId){
        const requestUrl = 'https://songs-microservices.herokuapp.com/api/v1/songs/' + songId;
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.delete(requestUrl, headers)
          .catch((error) => {
            return(error.response);
          });
        return response;
    } 
}