import axios from 'axios'

let url = "https://23e1-111-68-102-12.ngrok.io/api";

export const getIndustryRank = async () => {
    return await axios.get(`${url}/industryrank`);
}