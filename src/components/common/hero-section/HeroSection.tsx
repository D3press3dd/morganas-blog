import { MainTitle } from '../../../styled-components/MainTitle'
import { SecondaryText } from '../../../styled-components/SecondaryText'
import { HeroSectionStyled } from './HeroSectionStyled'

export function HeroSection (): JSX.Element {
  return (
    <HeroSectionStyled>
        <div>
          <MainTitle>Minimal blog template for creative expressions</MainTitle>
          <div>
            <SecondaryText>
              100% customisable and SEO-friendly blog template for personal and
              commercial purposes.
            </SecondaryText>
          </div>
        </div>
      </HeroSectionStyled>
  )
}
