import { combineReducers } from 'redux';
import authReducer from './auth';
import transaction from "./transactions";

export default combineReducers({
    auth: authReducer,
    transaction: transaction
});
