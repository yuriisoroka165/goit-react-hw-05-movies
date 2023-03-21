// import css from "./App.module.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

// React.lazy() - це метод який очікує функцію-завантажувач яка поаерне результат динамічного імпорту
// це проміс значенням якого буде дефолтний експорт модуля
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));

export function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
            </Route>
        </Routes>
    );
}
