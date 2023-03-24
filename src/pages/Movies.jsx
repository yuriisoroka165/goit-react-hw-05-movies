import fetchData from "services/data-fetch-api";
import { useState, useEffect } from "react";
import { MovieList } from "components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";
import { SearchForm } from "components/SearchForm/SearchForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Movies() {
    // const location
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (!query) {
            return;
        }
        const getMovies = async () => {
            try {
                const { results } = await fetchData(
                    "search/movie",
                    `&query=${query}`
                );
                setMovies(results);
            } catch (error) {
                setError(error.message);
                toast.error(`Fetch error: ${error}`);
            }
        };

        getMovies();
    }, [query]);

    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        setSearchParams({ query: form.elements.query.value });
        form.reset();
    }

    return (
        <>
            <h1>Welcome Movies Page</h1>
            <SearchForm onSubmit={handleFormSubmit} />
            {movies.length === 0 && query !== "" && (
                <p>{`We don't have any movies for query: ${query}!`}</p>
            )}
            {movies.length !== 0 && <MovieList movies={movies} />}
            {error && <ToastContainer autoClose={3000} />}
        </>
    );
}

export default Movies;
