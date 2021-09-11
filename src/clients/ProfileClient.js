import axios from "axios";

export class ProfileClient {
    async getUserData(username) {
        const url = "https://sheet.best/api/sheets/0fc1da4d-2cfe-460f-8354-67e7b2f0c8fd/search?"
        const response =  await axios(url, {params: {"username": username}})
        return response
    }
}

