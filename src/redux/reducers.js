import * as types from "../actions/actionTypes";

const initialState = {
  signupData: "",
};

const authUser = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SIGNUP_DATA:
      return {
        ...state,
        signupData: action.payload,
      };
    default:
      return state;
  }
};

export default authUser;
