import axios from "axios";

export class ProfileClient {
    async getUserData(username, password) {
        const url = `http://localhost:5000/karaoke/login/{"username":"` + username + `", "password":"` + password + `"}`
        const response =  await axios(url)
        alert(JSON.stringify(response))
        return response
    }
}

