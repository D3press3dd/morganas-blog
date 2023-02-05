import { ArticleCardStyled, ArticleCardTitle, ArticleDate } from './ArticleCardStyled'

interface ArticleCardProps {
  articleDate: string
  articleTitle: string
  articleImg: string
  articleInfo: string
}

export function ArticleCard ({ articleDate, articleTitle, articleImg, articleInfo }: ArticleCardProps): JSX.Element {
  return (
    <ArticleCardStyled>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
        <ArticleDate>{articleDate}</ArticleDate>
        <ArticleCardTitle>{articleTitle}</ArticleCardTitle>
        <p>{articleInfo}</p>
        </div>

        <div>
            <img src={articleImg} alt="" />
        </div>
    </ArticleCardStyled>
  )
}
