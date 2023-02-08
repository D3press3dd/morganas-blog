import styled from '@emotion/styled'

interface ExternalLinkProps {
  children: string | JSX.Element | JSX.Element[]
  href: string
  [props: string]: any
}

const ExternalLinkStyled = styled.a`
  transition: all .3s ease;
  font-weight: 700;

  &:link,&:visited{
    text-decoration: none;
    color: var(--dark-blue);
  }

  &:hover,&:active{
    color: var(--gray-600);
  }

  &:focus-visible{
    margin: 5px;
    padding: 5px;
  }
  
`

export function ExternalLink ({ href, children, ...props }: ExternalLinkProps): JSX.Element {
  return (
    <ExternalLinkStyled
        href={href}
        target={'_blank'}
        rel="noreferrer"
        {...props}
    >
        {children}
    </ExternalLinkStyled>
  )
}
