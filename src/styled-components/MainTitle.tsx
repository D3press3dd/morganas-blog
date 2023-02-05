import styled from '@emotion/styled'

interface MainTitleProps {
  children: string
}

const H1 = styled.h1`
    background: linear-gradient(97.1deg, #C41740 4.8%, #EA9C28 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 7.6rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 600px) {
      font-size: calc(76px/2);
    }

    @media (max-width: 380px) {
      font-size: 28px;
    }

`

export function MainTitle ({ children }: MainTitleProps): JSX.Element {
  return (
    <H1>{children}</H1>
  )
}
