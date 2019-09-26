import axios from 'axios';
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    LOGOUT_USER
} from '../actions/types';

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

export const logoutUser = history => dispatch => {
    dispatch({type: LOGOUT_USER });
    localStorage.removeItem('currentUser');
    if (history) history.push('/');
    else window.location.href = '/';
};
