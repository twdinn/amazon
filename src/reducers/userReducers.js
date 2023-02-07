import { USER_REGISTER } from "../constants/userConstants";

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
