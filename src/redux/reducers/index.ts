import { combineReducers } from "redux";

import articlesReducer from "./articles";
import usersReducer from "./users";

const reducers = combineReducers({
  articles: articlesReducer,
  user: usersReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
