import {
  ArticleCardStyled,
  ArticleCardTitle,
  ArticleDate,
  ArticleImage,
  ArticleInfo,
  ArticleLeftSide
} from './ArticleCardStyled'

import noneBg from '../../../assets/none.jpg'
import { truncateText } from '../../../utils/truncateText'

interface ArticleCardProps {
  articleDate: string
  articleTitle: string
  articleImg: string
  articleInfo: string
}

export function ArticleCard ({ articleDate, articleTitle, articleImg, articleInfo }: ArticleCardProps): JSX.Element {
  return (
    <ArticleCardStyled>
      <ArticleLeftSide>
        <ArticleDate>{articleDate}</ArticleDate>
        <ArticleCardTitle>{articleTitle}</ArticleCardTitle>
        <ArticleInfo>{truncateText(articleInfo)}</ArticleInfo>
      </ArticleLeftSide>

      <div>
        <ArticleImage loading='lazy' src={articleImg === '' ? noneBg : articleImg } alt='' />
      </div>
    </ArticleCardStyled>
  )
}
