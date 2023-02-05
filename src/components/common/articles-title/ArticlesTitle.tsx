import { ArticlesTitleStyled } from './ArticleTitleStyled'

interface ArticlesTitleProps {
  children: string
}

export function ArticlesTitle ({ children }: ArticlesTitleProps): JSX.Element {
  return (
    <ArticlesTitleStyled>{children}</ArticlesTitleStyled>
  )
}
