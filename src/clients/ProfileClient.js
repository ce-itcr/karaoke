import axios from "axios";

export class ProfileClient {
    async getUserData(username) {
        const url = "https://sheet.best/api/sheets/ae7ba662-75c1-4a38-ac2a-70d2e2c8e069/search?"
        const response =  await axios(url, {params: {"username": username}})
        return response
    }
}

