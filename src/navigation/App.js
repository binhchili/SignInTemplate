import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MainAppNavigator from './MainAppNavigator';
const Root = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName='Login'>
                <Root.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Root.Screen name='MainApp' component={MainAppNavigator} options={{ headerShown: false }} />
            </Root.Navigator>
        </NavigationContainer>

    )
}