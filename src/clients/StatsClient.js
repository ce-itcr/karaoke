import axios from "axios";

export class StatsClient {
    async getScore(text, lyrics){
        const requestUrl = 'http://localhost:5000/api/v1/stats/getScore';
        const lyricsData = {"text": text, "lyrics": lyrics};
        const headers = { 'Content-Type': 'application/json' };
        const response = await axios.post(requestUrl, lyricsData, headers)
          .catch((error) => {
            return(error.response);
          });
        console.log(response.data);
        return response.data;
    } 
}