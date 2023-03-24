import styled from "styled-components";

export const Form = styled.form`
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 200px;
    height: 40px;
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    padding: 8px;
    box-shadow: var(--input-box-shadow);

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    width: 80px;
    height: 40px;
    margin-bottom: 10px;
    background-color: var(--global-green-color);
    border: none;
    border-radius: 5px;
    box-shadow: var(--input-box-shadow);
    cursor: pointer;
`;
