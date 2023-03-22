import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Container, LinkWrapper, MovieName } from "./MoviesList.styled";

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
            {movies.map(movie => (
                <LinkWrapper key={movie.id}>
                    <Link to={`${movie.id}`} state={{ from: location }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                            alt=""
                        />
                        <MovieName>{movie.original_title}</MovieName>
                    </Link>
                </LinkWrapper>
            ))}
        </Container>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
