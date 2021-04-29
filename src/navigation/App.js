import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import MainAppNavigator from './MainAppNavigator';
import { persistor, store } from '../redux-store/Storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginAction from '../redux-store/login/LoginAction'
const Root = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<LoadingScreen />}>
                <NavigationContainer >
                    <Root.Navigator initialRouteName='Login'>
                        <Root.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                        <Root.Screen name='MainApp' component={MainAppNavigator} options={{ headerShown: false }} />
                    </Root.Navigator>
                </NavigationContainer>
            </PersistGate>

        </Provider>


    )
}