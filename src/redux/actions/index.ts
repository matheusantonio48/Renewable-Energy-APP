import { LOGIN, SIGN_UP } from '../types';

export const loginAction = (email: string, password: string) => ({
    type: LOGIN,
    payload: { email, password }
});

export const signUpAction = (firstName: string, lastName: string, email: string, password: string) => ({
    type: SIGN_UP,
    payload: { firstName, lastName, email, password }
});
