import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../screens/LoadingScreen';
import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../screens/HomeScreen';
import Container from '../screens/Container';
import { persistor, store } from '../redux-store/Storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginScreen from '../screens/LoginScreen';


const Root = createStackNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<LoadingScreen />}>

                <NavigationContainer >

                    <Root.Navigator initialRouteName='Login'>
                        <Root.Screen name='Login' options={{ headerShown: false }} >
                            {() => (
                                <Container>
                                    <LoginScreen />
                                </Container>
                            )}
                        </Root.Screen>
                        <Root.Screen name='MainApp' component={DrawerNavigator} options={{ headerShown: false }} />
                    </Root.Navigator>

                </NavigationContainer>


            </PersistGate>

        </Provider>

    )
}

