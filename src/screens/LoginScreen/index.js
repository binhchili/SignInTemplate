import React from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {styles} from './style';
import {InputFied} from '../../components/InputField';
export default function LoginScreen(){
    return(
        <SafeAreaView>
            <View style={{width: '100%', height:'100%', backgroundColor:'white'}}>
                <View style={styles.logoScreen}>
                    
                </View>
                <View style={styles.inputContainer}>
                    <InputFied container={styles.inputField} imageView = {styles.imageView} inputView={styles.mainInput} placeholder='Username'
                      source={require('../../res/UserLogo.jpg')}/>
                    <InputFied container={styles.inputField} imageView = {styles.imageView} inputView={styles.mainInput} placeholder='Password'
                    source={require('../../res/PassLogo.jpg')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}