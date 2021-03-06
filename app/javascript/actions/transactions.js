import axios from 'axios';
import { toast } from 'react-toastify';
import {setCurrentUser} from "./auth";
import {
    TRANSACTION_LOADING,
    SET_RECEIPT
} from '../actions/types';

export const isLoading = value => ({
    type: TRANSACTION_LOADING,
    payload: value
});

export const setReceipt = value => ({
    type: SET_RECEIPT,
    payload: value
});

export const performTransaction = (type, transDetails) => async dispatch => {
    try {
        dispatch(isLoading(true));
        const res = await axios.patch(`/transactions/${type}`, transDetails);
        const receipt = res.data.payload;

        localStorage.setItem('currentUser', JSON.stringify(receipt.user));
        dispatch(setReceipt(receipt));
        dispatch(setCurrentUser(receipt.user));
        toast.success('Transaction Successful');
    } catch (error) {
        dispatch(isLoading(false));
        if (error.response) {
            const errors = error.response.data.errors;
            if (errors.global) toast.error(errors.global);
            return;
        }
        toast.error('Please check your network connection and try again');
    }
};
