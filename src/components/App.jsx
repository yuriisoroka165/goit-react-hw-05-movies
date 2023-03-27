import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

// React.lazy() - це метод який очікує функцію-завантажувач яка поверне
// результат динамічного імпорту
// це проміс значенням якого буде дефолтний експорт модуля
// компоненти які тут імпортуються повинні мати default export .....
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export function App() {
    return (
        // опис всіх маршрутів
        <Routes>
            {/* SharedLayout шапка яка буде на всіх сторінках */}
            {/* SharedLayout має Outlet в якому буде відображення наступних вкладених маршрутів */}
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                {/* основний маршрут плюс вкладені сторінки даного маршрута */}
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                {/* при переході на некоректний URL відбудеться перехід на домашню сторінку */}
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
}
