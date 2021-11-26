import axios from "axios";

export class StatsClient {
    async getScore(text, lyrics, username){
        const requestUrl = 'http://localhost:5000/api/v1/stats/getScore';
        const lyricsData = {"text": text, "lyrics": lyrics, "username":username};
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(requestUrl, lyricsData, headers)
          .catch((error) => {
            return(error.response);
          });
        console.log(response.data);
        return response.data;
    } 

    async findUserWords(username){
      
      const url = `http://localhost:5000/api/v1/stats/getDifficultWords/{"username":"` + username + `"}`;
      const response =  await axios(url)
      return response
  } 
}