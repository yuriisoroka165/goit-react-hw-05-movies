import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import css from "./SharedLayout.module.css";

export function SharedLayout() {
    return (
        <>
            <header className={css.sharedlayout__header}>
                <nav className={css.sharedlayout__header_nav}>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </header>
            <div className={"container"}>
                {/* модуль Suspense призупиняє відображення компонента 
                    поки незакінчиться асинхронне завантаження React.lazy() */}
                {/* в даному випадку покаже заглушку */}
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}
