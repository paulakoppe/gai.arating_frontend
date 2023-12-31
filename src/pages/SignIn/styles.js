import styled from "styled-components";
import backgroundImg from '../../assets/fundo.png'


export const Container = styled.div `
    height:100vh;

    display: flex;
    align-items: stretch;

`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.VERDE_ESCURO};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.CINZA_ESCURO};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.LARANJA};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  backdrop-filter: opacity(70%);
`