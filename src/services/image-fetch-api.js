import axios from "axios";
import API_KEY from "./api-key";

const fetchData = async (parameters = "trending/movie/day", key = API_KEY) => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/${parameters}?api_key=${key}`,
        { withCredentials: false }
    );
    return data;
};

export default fetchData;

