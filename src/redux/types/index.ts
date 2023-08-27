export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';

export type UserState = {
  user: null | {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
  };
};

interface LoginAction {
  type: typeof LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

interface SignUpAction {
  type: typeof SIGN_UP;
  payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

  };
}

export type ActionTypes = LoginAction | SignUpAction;