import { Dispatch } from "redux";
import axios from "axios";

import { UserActionTypes as ActionTypes, User } from "../types";
import { UsersAction } from "../actions";

const getApiUrl = () => {
  if (process.env.NODE_ENV === "development")
    return process.env.REACT_APP_LOCAL_API;
  return process.env.REACT_APP_STAGING_API;
};

export const getUser = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: ActionTypes.GET_USER });

    try {
      const baseUrl = getApiUrl();
      const response = await axios.get(`${baseUrl}/test-api`);
      const { data }: { data: User } = response;
      dispatch({ type: ActionTypes.GET_USER_COMPLETE, payload: data });
    } catch (err) {
      dispatch({ type: ActionTypes.GET_USER_ERROR, payload: err.message });
    }
  };
};
