import { ActionTypes, LOGIN, SIGN_UP, UserState  } from '../types';

const initialState: UserState = { user: null };

const rootReducer = (state = initialState, action: ActionTypes): UserState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case SIGN_UP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default rootReducer;