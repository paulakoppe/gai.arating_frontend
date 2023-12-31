import styled from "styled-components";

export const Container = styled.textarea `
    width:100%;
    height: 150px;

    background-color: ${({ theme }) => theme.COLORS.CREME};
    color: ${({ theme }) => theme.COLORS.BRANCO};

    border: none;
    resize: none;

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.BRANCO};
    }
`