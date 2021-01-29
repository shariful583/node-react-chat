import { LOGIN, REGISTRATION, LOGOUT } from "../actions/types";

const initialState = {
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
        return {
            ...state,
            user: action.payload
        }
    case REGISTRATION:
        return {
            ...state,
            user: action.payload
        }

    case LOGOUT:
        return state;

    default:
        return state;
  }
}
