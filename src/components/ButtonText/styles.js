import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.CLARA : theme.COLORS.LARANJA};

    border: none;
    font-size: 16px;
`