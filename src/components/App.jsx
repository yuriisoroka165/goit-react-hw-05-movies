// import css from "./App.module.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

// React.lazy() - це метод який очікує функцію-завантажувач яка поdерне
// результат динамічного імпорту
// це проміс значенням якого буде дефолтний експорт модуля
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export function App() {
    return (
        // опис всіх маршрутів
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                {/* основний маршрут плюс вкладені сторінки даного маршрута */}
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    <Route path="movies/:movieId/cast" element={<Cast />} />
                    <Route path="movies/:movieId/reviews" element={<Reviews />} />
                </Route>
                <Route path="movies/:id" element={<MovieDetails />} />
            </Route>
        </Routes>
    );
}
