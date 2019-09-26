import axios from 'axios';
import { toast } from 'react-toastify';
import {
    SET_CURRENT_USER,
    LOGOUT_USER,
    IS_LOADING,
    SIGNIN_FAILURE
} from '../actions/types';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

export const isLoading = value => ({
    type: IS_LOADING,
    payload: value
});

export const loginUser = userData => async dispatch => {
    try {
        dispatch(isLoading(true));

        const res = await axios.post('/auth/login', userData);
        const user = res.data.payload;

        localStorage.setItem('currentUser', JSON.stringify(user));

        dispatch(setCurrentUser(user));
        toast.success('Login successful');
    } catch (error) {
        if (error.response) {
            const errors = error.response.data.errors;
            if (errors.global) toast.error(errors.global);
            return dispatch({
                type: SIGNIN_FAILURE,
                payload: errors
            });
        }
        dispatch(isLoading(false));
        toast.error('Please check your network connection and try again');
    }
};

export const logoutUser = history => dispatch => {
    dispatch({type: LOGOUT_USER });
    localStorage.removeItem('currentUser');
    if (history) history.push('/');
};

export const register = userData => async dispatch => {
    try {
        dispatch(isLoading(true));

        const res = await axios.post('/auth/register', userData);
        const user = res.data.payload.user;

        localStorage.setItem('currentUser', JSON.stringify(user));

        dispatch(setCurrentUser(user));
        toast.success('Account created. Store Account number');
    } catch (error) {
        if (error.response) {
            const errors = error.response.data.errors;
            if (errors.global) toast.error(errors.global);
            return dispatch({
                type: SIGNIN_FAILURE,
                payload: errors
            });
        }
        dispatch(isLoading(false));
        toast.error('Please check your network connection and try again');
    }
};
