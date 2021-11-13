import axios from "axios";

export class SigninClient {
    async verifyUser(username, password) {
        const url = `https://karaokeapi.josevenegasv.com/karaoke/login/{"username":"` + username + `", "password":"` + password + `"}`
        return await axios(url)
    }
}

