import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from '../screens/LoadingScreen';
import DrawerNavigator from './DrawerNavigator';
import { persistor, store } from '../redux-store/Storage';
import { connect, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginScreen from '../screens/LoginScreen';
import { ModalLoading } from '../components/ModalLoading';
import { SmallNotify } from '../components/SmallNotify';

const Root = createStackNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<LoadingScreen />}>
                <Container />
            </PersistGate>

        </Provider>
    )
}
const mapStateToProps = state => ({
    loading: state.loading,
    popup: state.popup
})

const Container = connect(mapStateToProps, null)((props) => {
    const { loading, popup } = props;
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName='Login'>
                <Root.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} initialParams={{ previousAction: 'none' }}>

                </Root.Screen>
                <Root.Screen name='MainApp' component={DrawerNavigator} options={{ headerShown: false }} />
            </Root.Navigator>
            <ModalLoading loading={loading} />
            <SmallNotify message={popup.message} toogleTime={popup.dispatch_time} />

        </NavigationContainer>
    )
})


