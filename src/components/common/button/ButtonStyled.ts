import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  padding: 1.2rem 1.4rem;
  font-weight: 700;
  border-radius: 0.8rem;
  background-color: #ffffff;
  border: 1px solid #d0d5dd;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1d2939;
    color: white;
    border: 1px solid #1d2939;
  }

  &:focus-visible{
    outline:1px solid #1D2939;
  }
`
