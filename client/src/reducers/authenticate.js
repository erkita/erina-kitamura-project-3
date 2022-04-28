import { AUTHENTICATE, LOGOUT } from "../actions/actionCalls";

const authenticationReducer = (
  state = { authenticationData: null },
  action
) => {
  switch (action.type) {
    case AUTHENTICATE:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authenticationData: action.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authenticationData: null };
    default:
      return state;
  }
};

export default authenticationReducer;
