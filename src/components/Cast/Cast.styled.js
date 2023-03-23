import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    padding-top: 20px;

    > h1 {
        margin-bottom: 10px;
    }
`;

export const CastList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;

    > h4 {
        margin-top: 5px;
        color: var(--global-black-color);
    }

    > p {
        margin-top: 10px;
        font-size: 12px;
        font-weight: 500;
    }
`;