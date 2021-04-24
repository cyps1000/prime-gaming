import { UserActionTypes as ActionTypes, User } from "../types";

/**
 * Defines the GetUserAction interface
 */
export interface GetUserAction {
  type: ActionTypes.GET_USER;
}

/**
 * Defines the GetUserCompleteAction interface
 */
export interface GetUserCompleteAction {
  type: ActionTypes.GET_USER_COMPLETE;
  payload: User;
}

/**
 * Defines the GetUserErrorAction interface
 */
export interface GetUserErrorAction {
  type: ActionTypes.GET_USER_ERROR;
  payload: string;
}

/**
 * Defines the general action type
 */
export type UsersAction =
  | GetUserAction
  | GetUserCompleteAction
  | GetUserErrorAction;
