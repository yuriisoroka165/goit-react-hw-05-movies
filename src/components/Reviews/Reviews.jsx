import { Container, ReviewsList, ReviewsItem } from "./Reviews.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "services/data-fetch-api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const { results } = await fetchData(
                    `/movie/${movieId}/reviews`
                );
                setReviews(results);
            } catch (error) {
                setError(error.message);
                toast.error(`Fetch error: ${error}`);
            }
        };
        getReviews();
    }, [movieId]);

    return (
        <Container>
            {error && <ToastContainer autoClose={3000} />}
            <h2>Reviews</h2>
            {reviews.length === 0 && <p>We don't have any reviews for this movie!</p>}
            <ReviewsList>
                {reviews.map(review => (
                    <ReviewsItem key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </ReviewsItem>
                ))}
            </ReviewsList>
        </Container>
    );
}

export default Reviews;
