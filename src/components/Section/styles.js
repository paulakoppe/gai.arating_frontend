import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0 ;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme}) => theme.COLORS.CREME};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${({ theme}) => theme.COLORS.VERDE_ESCURO};
    font-size: 20px;
    font-weight: 400;
  }
`