import {
  ArticleCardStyled,
  ArticleCardTitle,
  ArticleDate,
  ArticleImage,
  ArticleLeftSide
} from './ArticleCardStyled'

interface ArticleCardProps {
  articleDate: string
  articleTitle: string
  articleImg: string
  articleInfo: string
}

export function ArticleCard ({
  articleDate,
  articleTitle,
  articleImg,
  articleInfo
}: ArticleCardProps): JSX.Element {
  return (
    <ArticleCardStyled>
      <ArticleLeftSide>
        <ArticleDate>{articleDate}</ArticleDate>
        <ArticleCardTitle>{articleTitle}</ArticleCardTitle>
        <p>{articleInfo}</p>
      </ArticleLeftSide>

      <div>
        <ArticleImage src={articleImg} alt='' />
      </div>
    </ArticleCardStyled>
  )
}
