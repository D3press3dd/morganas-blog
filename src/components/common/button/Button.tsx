import { ButtonStyled } from './ButtonStyled'

interface ButtonProps {
  children: string
  onClick?: () => void
}

export function Button ({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <ButtonStyled
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}
