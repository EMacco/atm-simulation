import {
    SET_CURRENT_USER,
    LOGOUT_USER,
    IS_LOADING,
    SIGNIN_FAILURE
} from "../actions/types";

const initialState = {
    loading: false,
    user: {},
    errors: {},
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                errors: {},
                loading: false
            };
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                loading: false
            };
        case IS_LOADING:
            return {
                ...state,
                loading: action.payload,
                errors: {}
            };
        case SIGNIN_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default authReducer;
