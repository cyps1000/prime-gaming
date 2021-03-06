import { Dispatch } from "redux";

/**
 * Imports utils
 */
import { getApiClient } from "../../utils/api";

import { UserActionTypes as ActionTypes, User } from "../types";
import { UsersAction } from "../actions";

// const getApiUrl = () => {
//   if (process.env.NODE_ENV === "development")
//     return process.env.REACT_APP_LOCAL_API;
//   return process.env.REACT_APP_STAGING_API;
// };

export const getUser = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    /**
     * Gets the api caller
     */
    const { apiClient } = getApiClient({ mock: true });

    dispatch({ type: ActionTypes.GET_USER });

    try {
      // const baseUrl = getApiUrl();

      // const response = await axios.get(`${baseUrl}/test-api`);
      const response = await apiClient.get(`/v1/users/1`);
      const { data } = response;
      const { user }: { user: User } = data;

      dispatch({ type: ActionTypes.GET_USER_COMPLETE, payload: user });
    } catch (err) {
      dispatch({ type: ActionTypes.GET_USER_ERROR, payload: err.message });
    }
  };
};
