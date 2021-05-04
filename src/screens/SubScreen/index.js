import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';


export default function SubScreen() {
    return (

        <View style={{ width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15 }}>{`Subscreen`}</Text>
        </View>

    )
}