import axios from "axios";
import API_KEY from "./api-key";

async function fetchData(parameters, query="", key = API_KEY) {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/${parameters}?api_key=${key}${query}`,
        { withCredentials: false }
    );
    return data;
};

export default fetchData;

