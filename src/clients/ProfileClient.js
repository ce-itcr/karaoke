import axios from "axios";

export class ProfileClient {
    async getUserData(userId) {
        const url = "https://karaoke-api-develop.herokuapp.com/api/v1/auth/user/" + userId
        const response =  await axios(url)
        return response
    }

    async updateFavoriteList(userId, favorites) {
        const requestUrl = 'https://karaoke-api-develop.herokuapp.com/api/v1/auth/user/favorites/' + userId;
        const userData = {"favoriteArtists": favorites};
        const headers = { 'Content-Type': 'application/json;charset=UTF-8' };
        const response = await axios.put(requestUrl, userData, headers)
          .catch((error) => {
            return(error.response);
          });
        return response.data;
    }

    async updatePlayedSongs(userId, playedSong){
        const requestUrl = 'https://karaoke-api-develop.herokuapp.com/api/v1/auth/user/played/' + userId;
        const userData = {"currentSong": playedSong};
        const headers = { 'Content-Type': 'application/json;charset=UTF-8' };
        const response = await axios.put(requestUrl, userData, headers)
          .catch((error) => {
            return(error.response);
          });
        return response.data;
    }
    

}
