import axios from "axios";

export class ProfileClient {
    async getUserData(username) {
        const url = "https://sheet.best/api/sheets/203e1d8f-fc69-44d2-9c03-42ebb56ad383/search?"
        const response =  await axios(url, {params: {"username": username}})
        return response
    }
}

