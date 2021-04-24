/**
 * Defines the actions types.
 */
export enum UserActionTypes {
  GET_USER = "get_user",
  GET_USER_COMPLETE = "get_user_complete",
  GET_USER_ERROR = "get_user_error",
}

/**
 * Defines the User interface.
 */
export interface User {
  id: string;
  email: string;
  name: string;
}
