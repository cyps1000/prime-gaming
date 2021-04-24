import produce from "immer";
import { UserActionTypes as ActionTypes, User } from "../types";
import { UsersAction } from "../actions";

interface UserState {
  loading: boolean;
  error: string | null;
  user: User;
}

const initialState = {
  loading: false,
  error: null,
  user: {
    id: "",
    email: "",
    name: "",
  },
};

const reducer = produce(
  (state: UserState = initialState, action: UsersAction): UserState => {
    switch (action.type) {
      case ActionTypes.GET_USER:
        state.loading = true;
        state.error = null;

        return state;
      case ActionTypes.GET_USER_COMPLETE:
        state.loading = false;
        state.error = null;
        state.user = action.payload;

        return state;
      case ActionTypes.GET_USER_ERROR:
        state.loading = false;
        state.error = action.payload;

        return state;
      default:
        return state;
    }
  }
);

export default reducer;
