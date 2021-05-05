import { LoginReducer } from './login/LoginReducer';
import { UserReducer } from './user/UserReducer';
import { LoadingReducer } from './loading/LoadingReducer';
import { PopupReducer } from './popup/PopupReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginPersistConfig = {//config rieng cho reducer login
    key: 'loginInfo',
    storage: AsyncStorage,
    whitelist: ['ticket']
};
export const RootReducer = combineReducers({
    loginInfo: persistReducer(loginPersistConfig, LoginReducer),
    userInfo: UserReducer,
    loading: LoadingReducer,
    popup: PopupReducer

})

