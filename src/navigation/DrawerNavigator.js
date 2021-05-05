import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MainAppNavigator from './MainAppNavigator';
import SubScreen from '../screens/SubScreen';
import LoginAction from '../redux-store/login/LoginAction';
import LoadingAction from '../redux-store/loading/LoadingAction';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constraints/size';
import * as Color from '../constraints/color';

const Drawer = createDrawerNavigator();
const DrawerNavigator = (props) => {

    return (
        <Drawer.Navigator initialRouteName='Main' drawerContent={drawerprops => <CustomDrawer {...drawerprops} {...props} />}>
            <Drawer.Screen name="Main" component={MainAppNavigator} />
            <Drawer.Screen name="Sidebar" component={SubScreen} />

        </Drawer.Navigator>
    )
}

const CustomDrawer = (props) => {//custom sidebar cua app
    const navigation = useNavigation();

    const { userTicket, identity, listGroup, logTime } = props;
    //logout: ham logout khoi account hien tai
    //logTime: khi logout se update logTime trong store = null, dua vao day de navigate den man 

    const { logout, loadingComplete } = props;

    useEffect(() => {
        if (logTime == null) {
            loadingComplete();
            navigation.navigate('Login', { previousAction: 'logout' });
        }
    }, [logTime])

    return (
        <DrawerContentScrollView {...props} style={{ borderWidth: 1, borderColor: 'black' }}>
            <View style={styles.firstContainer}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => logout(userTicket)}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    firstContainer: {
        width: '100%', height: SCREEN_HEIGHT / 5, borderColor: 'red', borderWidth: 2,
        justifyContent: 'center',
    },
    logoutButton: {
        width: '50%', height: '20%', borderRadius: 15, backgroundColor: Color.LIGHT_GRAY,
        justifyContent: 'center', alignItems: 'center'
    }
})

const mapStateToProps = state => ({
    logTime: state.loginInfo.loggedTime,
    userTicket: state.userInfo.userTicket,
    identity: state.userInfo.userIdentity,
    listGroup: state.userInfolistGroup
})

const mapDispatchToProps = dispatch => ({
    logout: tick => dispatch(LoginAction.LogoutSSO(tick)),//call action logout
    loadingComplete: () => dispatch({ type: LoadingAction.TOOGLE_LOADING, isLoading: false }),//call action end loading
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)
