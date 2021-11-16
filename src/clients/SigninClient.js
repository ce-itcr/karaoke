import axios from "axios";

export class SigninClient {
    async verifyUser(userId, password){
        const requestUrl = 'https://karaoke-api-develop.herokuapp.com/api/v1/auth/login';
        const userData = {"userId": userId, "password": password};
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(requestUrl, userData, headers)
          .catch((error) => {
            return(error.response);
          });
        return response.data;
    } 
}