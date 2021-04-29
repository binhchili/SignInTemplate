import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default function LoadingScreen() {
    return (
        <SafeAreaView>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        </SafeAreaView>
    )
}