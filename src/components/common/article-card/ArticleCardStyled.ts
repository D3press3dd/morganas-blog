import styled from '@emotion/styled'

export const ArticleCardStyled = styled.article`
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: var(--white);
  width: 100%;
  border-radius: 10px;
  padding: 20px 30px;
  cursor: pointer;

  &:hover{
    outline: 1px solid var(--dark-blue-lighten);
  }

  img{
    max-width: 300px;
    width: 100%;
    margin-left: auto;
    border-radius: 10px;
    min-height: 100%;
    object-fit: cover;
  }


  @media (max-width: 768px) {
    img {
         max-width: 200px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: unset;

    img{
        margin-right: auto;
        max-width: 100%;
        border-radius: unset;
    }
  }
`

export const ArticleCardTitle = styled.h2`
    font-size: 2.6rem;
    color: var(--dark-blue-lighten);
    line-height: 130%;
`

export const ArticleDate = styled.p`
    text-transform: uppercase;
    color: var(--gray-500);
    text-align: center;
    font-size: 13px;
    display: inline-block;
`
