import produce from "immer";
import { ArticleActionTypes as ActionTypes, Article } from "../types";
import { ArticlesAction } from "../actions";

interface Articles {
  loading: boolean;
  error: string | null;
  articles: Article[];
}

const initialState = {
  loading: false,
  error: null,
  articles: [],
};

const reducer = produce(
  (state: Articles = initialState, action: ArticlesAction): Articles => {
    switch (action.type) {
      case ActionTypes.GET_ARTICLES:
        state.loading = true;
        state.error = null;

        return state;
      case ActionTypes.GET_ARTICLES_COMPLETE:
        state.loading = false;
        state.error = null;
        state.articles = action.payload;

        return state;
      case ActionTypes.GET_ARTICLES_ERROR:
        state.loading = false;
        state.error = action.payload;

        return state;
      default:
        return state;
    }
  }
);

export default reducer;
