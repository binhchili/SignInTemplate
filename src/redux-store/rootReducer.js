import { LoginReducer } from './login/LoginReducer.';
import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    LoginReducer, UserReducer
})