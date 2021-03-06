import { createStore, applyMiddleware } from 'redux'
import { RootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['loginInfo', 'loading', 'userInfo', 'popup']

}//config cách thức lấy data từ localStorage
const persist = persistReducer(persistConfig, RootReducer);//reducer đã config storage của redux-persist
export const store = createStore(persist, applyMiddleware(thunk));
export const persistor = persistStore(store);//xuất ra persistor để lấy dữ liệu