import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Login from '../../api/Login';

export default function HomeScreen({ route }) {
    const [name, setName] = useState('');
    useEffect(() => {
        Login.userInfo(route.userToken).then(res => setName(res.data.name)).catch(() => setName("Co loi xay ra"))
    }, [])
    return (
        <SafeAreaView>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>{`User info : ${name}`}</Text>
            </View>
        </SafeAreaView>
    )
}