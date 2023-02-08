import styled from '@emotion/styled'
import { ExternalLink } from './common/external-links/ExternalLink'

const FooterStyled = styled.footer`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  padding: 20px 60px;

  q {
    color:var(--gray-600);
    font-weight: 700;
  }

  figcaption {
    font-style: italic;
  }
`

const CopyrightFooter = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:inset 0px 1px 0px rgba(30, 40, 52, 0.12);
`

export function Footer (): JSX.Element {
  return (
    <>
      <FooterStyled>
        <q>La calidad no se hace, se espera.</q>
        <figcaption>—Watts S. Humphrey</figcaption>
      </FooterStyled>

      <CopyrightFooter>
        <p>
          Hecho con 💖 por <ExternalLink href="https://github.com/D3press3dd"> Anthony Rosman </ExternalLink> y <ExternalLink href="https://github.com/wiwir"> William Ramirez</ExternalLink> diseño por <ExternalLink href="https://twitter.com/elikemdaniels">@elikemdaniels</ExternalLink>
        </p>
      </CopyrightFooter>
    </>
  )
}
