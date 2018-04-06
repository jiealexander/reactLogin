import axios from 'axios';
// import { Router } from 'react-router-dom';
import { AUTH_USER, UNAUTH_USER,  AUTH_ERROR } from './type';

const ROOT_URL = '';

export function signinUser({ email, password }, callback) {
    return function(dispatch) {
        axios.post(`${ ROOT_URL }/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                callback();
            })
            .catch(() =>{
                dispatch(authError('Login error'));
            })
    }
}

export function signupUser({ email, password }, callback) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(responese => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', responese.data.token);
                callback();
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}



