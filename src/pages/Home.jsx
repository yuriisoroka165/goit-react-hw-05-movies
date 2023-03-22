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
                const { results } = await fetchData();
                setMovies(results);
            } catch (error) {
                setError(error.message);
                toast.error(`Fetch error: ${error}`);
            }
        };

        getTrending();
    }, []);

    return (
        <main>
            <h1>Trending movies today</h1>
            {movies && <MovieList movies={movies} />}
            {error && <ToastContainer autoClose={3000} />}
        </main>
    );
}

export default Home;
