import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";

export function SharedLayout() {
    return (
        <>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Container>
                {/* модуль Suspense призупиняє відображення компонента 
                    поки незакінчиться асинхронне завантаження React.lazy() */}
                {/* в даному випадку покаже заглушку */}
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
}
