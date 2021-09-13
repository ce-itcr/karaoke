import axios from "axios";

export class ProfileClient {
    async getUserData(username) {
        const url = "https://sheet.best/api/sheets/934733c2-2112-4e11-806d-88ec0f67389a/search?"
        const response =  await axios(url, {params: {"username": username}})
        return response
    }
}

