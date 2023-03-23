import styled from "styled-components";

export const Button = styled.button`
    width: 80px;
    height: 30px;
    margin-bottom: 10px;
    background-color: var(--global-green-color);
    border: none;
    border-radius: 5px;
`;

export const MovieMainInformation = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    color: var(--global-black-color);
    // outline: 1px solid blue;
`;

export const MovieDescription = styled.div`
    padding: 10px;

    > h2,h3,h4 {
        margin-bottom: 20px;
    }

    > p {
        margin-bottom: 20px;
    }

    > div {
        display: flex;
        gap: 6px;
    }
`;

export const MovieAdditionalInformation = styled.div`
    width: 100%;
    padding: 10px;
    padding-bottom: 15px;
    color: var(--global-black-color);
    border-top: 1px solid var(--global-black-color);
    border-bottom: 1px solid var(--global-black-color);
    // outline: 1px solid blue;

    > p {
        margin-bottom: 20px;
    }

    > ul {
        display: flex;
        gap: 6px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    > ul a {
        padding: 5px 10px;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        background-color: var(--global-green-color);
        color: var(--global-black-color);
        border-radius: 5px;

        &.active {
            color: var(--global-white-color);
        }
    }
`;