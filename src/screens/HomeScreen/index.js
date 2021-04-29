import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, Text } from 'react-native';
import Login from '../../api/Login';

const HomeScreen = (props) => {
    const { userTicket, identity, listGroup } = props;
    useEffect(() => {
        console.log(userTicket);
        console.log(JSON.stringify(identity));

    }, [])

    return (
        <SafeAreaView>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>Hello</Text>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    userTicket: state.userInfo.userTicket,
    identity: state.userInfo.userIdentity,
    listGroup: state.userInfolistGroup
})

export default connect(mapStateToProps, null)(HomeScreen)