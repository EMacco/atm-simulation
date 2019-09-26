import {
    SET_CURRENT_USER,
    LOGOUT_USER
} from "../actions/types";

const initialState = {
    loading: false,
    user: {},
    errors: {},
    isAuthenticated: false
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
        default:
            return state;
    }
};

export default authReducer;
