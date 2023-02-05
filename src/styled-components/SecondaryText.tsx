import styled from '@emotion/styled'

interface SecondaryProps {
  children: string
}

const Secondary = styled.h3`
    color: var(--gray-600);
    font-weight: 100;
    text-align: center;
    font-size: 2.8rem;
`

export function SecondaryText ({ children }: SecondaryProps): JSX.Element {
  return (
    <Secondary>{children}</Secondary>
  )
}
