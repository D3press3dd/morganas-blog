import { MainTitle } from '../styled-components/MainTitle'
import { SecondaryText } from '../styled-components/SecondaryText'

import styled from '@emotion/styled'

const MainContentContainer = styled.main`
  min-height: 200vh;
`
export function MainContent (): JSX.Element {
  return (
    <MainContentContainer>
      <MainTitle>Minimal blog template for creative expressions</MainTitle>
      <SecondaryText>
        100% customisable and SEO-friendly blog template for personal and
        commercial purposes.
      </SecondaryText>
    </MainContentContainer>
  )
}
