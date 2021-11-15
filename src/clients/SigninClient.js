import axios from "axios";

export class SigninClient {
    async verifyUser(username, password) {
        const url = "https://sheet.best/api/sheets/8b1096dd-0af6-4b5b-b6f6-bbdb3d71d09d/search?"
        const response =  await axios(url, {params: {"username": username, "password": password}})
        return response
    }
}