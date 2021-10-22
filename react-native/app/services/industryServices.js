import axios from 'axios'

let url = "https://ed9f-111-119-187-4.ngrok.io/api/industryrank";

export const getIndustryRank = async () => {
    return await axios.get(url);
}