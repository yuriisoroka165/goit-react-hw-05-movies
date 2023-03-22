import { useEffect, useState } from "react";
import fetchData from "services/image-fetch-api";

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTrending = async () => {
            try {
                const { results } = await fetchData();
                setMovies(results);
            } catch (error) {
                setError(error.message);
            }
        };

        getTrending();
    }, []);

    return (
        <>
            {movies && (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>{movie.original_title}</li>
                    ))}
                </ul>
            )}
            {error}
        </>
    );
};
