import axios from "axios";

export class ProfileClient {
    async getUserData(username) {
        const url = "https://sheet.best/api/sheets/b5fc9c7a-0f86-43e6-a8c7-23881a278ddf/search?"
        const response =  await axios(url, {params: {"username": username}})
        return response
    }
}

