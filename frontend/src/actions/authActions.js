import http from '../config/axios';
import { LOGIN, REGISTRATION, LOGOUT} from './types';

export const login = (loginData) => dispatch => {
    http.post('/login',loginData)
    .then(loginUser => {
        dispatch({
            type: LOGIN,
            payload: loginUser
        })
    })
};

export const registration = (registrationData) => dispatch => {
    console.log('action');
    http.post('/register', registrationData)
    .then(registerUser => {
        dispatch({
            type: REGISTRATION,
            payload: registerUser
        })
    })
};

export const logout = () => dispatch => {
    
};