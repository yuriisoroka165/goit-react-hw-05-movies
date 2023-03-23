import { Container, CastList, CastItem } from "./Cast.styled";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "services/data-fetch-api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCastData = async () => {
            try {
                const { cast } = await fetchData(`/movie/${movieId}/credits`);
                setCast(cast);
            } catch (error) {
                setError(error.message);
                toast.error(`Fetch error: ${error}`);
            }
        };
        getCastData();
    }, [movieId]);
    return (
        <Container>
            {error && <ToastContainer autoClose={3000} />}
            <h1>Cast</h1>
            <CastList>
                {cast.map(actor => {
                    if (actor.profile_path) {
                        return (
                            <CastItem key={actor.id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                                    alt={`${actor.name}`}
                                />
                                <h4>{actor.name}</h4>
                                <p>Character: {actor.character}</p>
                            </CastItem>
                        );
                    }
                })}
            </CastList>
        </Container>
    );
}

export default Cast;
