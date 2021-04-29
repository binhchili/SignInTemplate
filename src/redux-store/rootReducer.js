import { LoginReducer } from './login/LoginReducer.';
import { UserReducer } from './user/UserReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginPersistConfig = {
    key: 'loginInfo',
    storage: AsyncStorage,
    blacklist: ['loggedTime']
};
export const RootReducer = combineReducers({
    loginInfo: persistReducer(loginPersistConfig, LoginReducer),
    userInfo: UserReducer
})

