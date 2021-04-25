/**
 * Defines the actions types.
 */
export enum ArticleActionTypes {
  GET_ARTICLES = "get_articles",
  GET_ARTICLES_COMPLETE = "get_articles_complete",
  GET_ARTICLES_ERROR = "get_articles_error",
}

/**
 * Defines the Article interface.
 */
export interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
}
