import * as types from "./actionTypes";

const initialState = {
  signupData: "",
  credits:0
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SIGNUP_DATA:
      return {
        ...state,
        signupData: action.payload,
      };
    case types.SET_CREDITS:
      return {
        ...state,
        credits: initialState.credits + action.payload,
      };
    default:
      return state;
  }
};

console.log(initialState.credits,'+++++++++++++++++++++');
export default authUser;
