import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    padding-top: 20px;

    > h2 {
        margin-bottom: 10px;
    }
`;

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
    color: var(--global-black-color);
`;

export const ReviewsItem = styled.li`
    > h4 {
        display: inline-block;
        margin-bottom: 10px;
        padding: 5px;
        background-color: var(--global-sky-color);
        border-radius: 5px;
        color: var(--global-backgray-color);
        // outline: 1px solid blue;
    }
`;
