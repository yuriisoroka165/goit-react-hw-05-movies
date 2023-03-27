import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import fetchData from "services/data-fetch-api";
import { SearchForm } from "components/SearchForm/SearchForm";
import { MovieList } from "components/MoviesList/MoviesList";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    // хук useSearchParams, в змінній searchParams зберігається обєкт
    // напкриклад { query: "batman" } в ULR буде ?query=batman
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        // відмінити запит з порожнім query
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
        const formInputValue = form.elements.query.value;
        setSearchParams(formInputValue !== "" ? { query: formInputValue } : {});
        form.reset();
    }

    return (
        <>
            <h1>Welcome to Movies Page</h1>
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
