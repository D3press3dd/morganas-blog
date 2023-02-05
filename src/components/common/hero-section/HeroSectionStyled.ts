import styled from '@emotion/styled'

export const HeroSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  padding: 80px 20px;

  @media (max-width: 380px) {
    padding-inline:10px ;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  & > div > div {
    padding-inline: 12%;

    @media (max-width: 380px) {
      padding-inline:unset;
    }
  }
`
