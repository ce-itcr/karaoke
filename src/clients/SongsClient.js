import axios from "axios";

export class SongsClient {
    async getAllSongs() {
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs"
        const response =  await axios(url)
        return response
    }

    async getSong(songAuthor){
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/tabs/songs/search?"
        const response =  await axios(url, {params: {"songAuthor": songAuthor}})
        return response
    }
}