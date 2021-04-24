import { ArticleActionTypes as ActionTypes, Article } from "../types";

/**
 * Defines the GetArticlesAction interface
 */
export interface GetArticlesAction {
  type: ActionTypes.GET_ARTICLES;
}

/**
 * Defines the GetArticlesCompleteAction interface
 */
export interface GetArticlesCompleteAction {
  type: ActionTypes.GET_ARTICLES_COMPLETE;
  payload: Article[];
}

/**
 * Defines the GetArticlesErrorAction interface
 */
export interface GetArticlesErrorAction {
  type: ActionTypes.GET_ARTICLES_ERROR;
  payload: string;
}

/**
 * Defines the general action type
 */
export type ArticlesAction =
  | GetArticlesAction
  | GetArticlesCompleteAction
  | GetArticlesErrorAction;
