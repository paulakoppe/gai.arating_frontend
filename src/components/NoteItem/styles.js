import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.CREME};
  color: ${({ theme }) => theme.COLORS.CINZA_ESCURO};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.CREME}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.VERMELHO};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LARANJA};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LARANJA};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LARANJA};
    }
  }
`