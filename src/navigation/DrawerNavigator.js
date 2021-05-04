import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MainAppNavigator from './MainAppNavigator';
import SubScreen from '../screens/SubScreen';
import LoginAction from '../redux-store/login/LoginAction'

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

const CustomDrawer = (props) => {
    const { userTicket, identity, listGroup, logout } = props;
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
    userTicket: state.userInfo.userTicket,
    identity: state.userInfo.userIdentity,
    listGroup: state.userInfolistGroup
})

const mapDispatchToProps = dispatch => ({
    logout: tick => dispatch(LoginAction.LogoutSSO(tick))
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)
