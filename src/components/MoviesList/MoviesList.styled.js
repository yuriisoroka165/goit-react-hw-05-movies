import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
    margin-top: 30px;
`;

export const LinkWrapper = styled.div`
    flex-basis: calc((100% - 10px) / 7);
    outline: 1px solid blue;

    > a {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        text-decoration: none;
        font-weight: 500;
        color: var(--global-black-color);
    }
`;

export const MovieName = styled.h6`
    max-width: 154px;
    margin-top: 5px;
`;
