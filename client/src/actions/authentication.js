import * as api from "../api/index.js";
import { AUTHENTICATE } from "./actionCalls";

export const signIn = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData);
    dispatch({ type: AUTHENTICATE, data });
    router.push("/");
  } catch (error) {
    console.log(error);
    alert("Incorrect email or password. Please try again.");
  }
};

export const signUp = (userData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(userData);
    dispatch({ type: AUTHENTICATE, data });
    router.push("/");
  } catch (error) {
    console.log(error.message);
    alert(
      "Sign up unsuccessful. Please try again with valid email and matching password."
    );
  }
};
