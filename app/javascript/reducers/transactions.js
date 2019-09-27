import {
    TRANSACTION_LOADING,
    SET_RECEIPT
} from "../actions/types";

const initialState = {
    loading: false,
    receipt: {},
};

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECEIPT:
            return {
                ...state,
                receipt: action.payload,
                loading: false
            };
        case TRANSACTION_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default transaction;
