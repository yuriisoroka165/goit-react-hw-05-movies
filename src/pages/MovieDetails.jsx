import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "services/data-fetch-api";
import { Movie } from "components/Movie/Movie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MoviesDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovieData = async () => {
            try {
                const movieData = await fetchData(`movie/${movieId}`);
                setMovie(movieData);
            } catch (error) {
                setError(error.message);
                toast.error(`Fetch error: ${error}`);
            }
        };
        getMovieData();
    }, [movieId]);

    return (
        <>
            {movie && <Movie movie={movie} />}
            {error && <ToastContainer autoClose={3000} />}
        </>
    );
}

export default MoviesDetails;
