import fetchData from "services/data-fetch-api";
import { useState, useEffect } from "react";
import { MovieList } from "components/MoviesList/MoviesList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTrending = async () => {
            try {
                const { results } = await fetchData("trending/movie/day");
                setMovies(results);
            } catch (error) {
                setError(error.message);
                toast.error(`Fetch error: ${error}`);
            }
        };

        getTrending();
    }, []);

    return (
        <>
            <h1>Trending movies today</h1>
            {movies.length !== 0 && <MovieList movies={movies} />}
            {error && <ToastContainer autoClose={3000} />}
        </>
    );
}

export default Home;
