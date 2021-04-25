import { Dispatch } from "redux";
import axios from "axios";

import { ArticleActionTypes as ActionTypes, Article } from "../types";
import { ArticlesAction } from "../actions";

export const getArticles = () => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    dispatch({ type: ActionTypes.GET_ARTICLES });

    try {
      const response = await axios.get("/test-api");
      const { data }: { data: Article[] } = response;
      dispatch({ type: ActionTypes.GET_ARTICLES_COMPLETE, payload: data });
    } catch (err) {
      dispatch({ type: ActionTypes.GET_ARTICLES_ERROR, payload: err.message });
    }
  };
};
