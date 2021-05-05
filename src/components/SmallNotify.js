import React, { useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, Animated, Platform } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constraints/size';

export const SmallNotify = (props) => {
    const { message, toogleTime } = props;//msg: title thong bao, toogleTime: thoi gian popup hien
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        //chi khi nao thoi gian dispatch thay doi thi se bat popup, ngoai ra message phai co ki tu
        console.log("This is " + message);
        if (message != "" && message != null) {
            Animated.sequence([
                Animated.timing(opacity, { toValue: 0.7, duration: 500, useNativeDriver: true, }),
                Animated.delay(1000),
                Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true, }),
            ]).start();
        }
    }, [toogleTime])

    return (

        <Animated.View style={{ ...styles.notify, opacity: opacity, bottom: SCREEN_HEIGHT / 10 }} pointerEvents='none'>
            <Text style={styles.title}>{message}</Text>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    notify: {
        position: 'absolute', alignSelf: 'center', backgroundColor: 'gray', borderRadius: 30,
        justifyContent: 'center', alignItems: 'center', padding: 15,
        zIndex: 500
    },
    title: {
        fontSize: 16, color: 'white', textAlign: 'center'
    }
})