import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import DrawerNavigator from './DrawerNavigator';
import { persistor, store } from '../redux-store/Storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginAction from '../redux-store/login/LoginAction';
import { ModalLoading } from '../components/ModalLoading';
const Root = createStackNavigator();

export default function App() {


    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<LoadingScreen />}>
                <SafeAreaView>
                    <ModalLoading />
                    <NavigationContainer >
                        <Root.Navigator initialRouteName='Login'>
                            <Root.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                            <Root.Screen name='MainApp' component={DrawerNavigator} options={{ headerShown: false }} />
                        </Root.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </PersistGate>

        </Provider>


    )
}