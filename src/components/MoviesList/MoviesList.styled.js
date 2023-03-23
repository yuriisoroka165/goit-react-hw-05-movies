import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    color: var(--global-black-color);
`;

export const LinkWrapper = styled.div`
    // outline: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > a {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        font-weight: 500;
        color: var(--global-black-color);
    }
`;

export const MovieName = styled.h6`
    margin-top: 5px;
`;

export const MovieRelease = styled.p`
    font-size: 8px;
`;
