import axios from "axios";

export class SigninClient {
    async verifyUser(username, password) {
        const url = `http://localhost:5000/karaoke/login/{"username":"` + username + `", "password":"` + password + `"}`
        const response =  await axios(url)
        return response
    }
}

