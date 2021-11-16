import axios from "axios";

export class ProfileClient {
    async getUserData(userId) {
        const url = "https://karaoke-api-develop.herokuapp.com/api/v1/auth/user/" + userId
        const response =  await axios(url)
        return response
    }
}
