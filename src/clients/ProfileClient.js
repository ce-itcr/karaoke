import axios from "axios";

export class ProfileClient {
    async getUserData(username) {
        const url = "https://sheet.best/api/sheets/29ca71ea-830b-4bed-83b6-67f322773b53/search?"
        const response =  await axios(url, {params: {"username": username}})
        return response
    }
}
