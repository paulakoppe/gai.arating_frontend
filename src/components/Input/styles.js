import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.CREME};
    color: ${({ theme }) => theme.COLORS.BRANCO};

    margin-bottom: 8px;
    border-radius: 10px ;
    

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.LARANJA};
        background: transparent;
        border: 0;

     &::placeholder {
        color: ${({ theme }) => theme.COLORS.BRANCO};
     }   

    

    }
    > svg {
        margin-left: 16px;;
     }
    `;