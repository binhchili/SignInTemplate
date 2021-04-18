import React, {useState,createContext,useReducer} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import {styles} from './style';
import {InputField} from '../../components/InputField';
import { useEffect } from 'react/cjs/react.production.min';


export default function LoginScreen(){

    const [userLogin,setUserLogin] = useState({
        username:'',
        password:''
    });

    const updateUsername = (username)=> setUserLogin(prev =>({...prev,username}));
    const updatePassword = (password)=> setUserLogin(prev =>({...prev,password}));
    
    
    return(
    <SafeAreaView>
        <View style={styles.mainScreen}>
            <View style={styles.logoScreen}>
                
            </View>
            <View style={styles.inputContainer}>
                <InputField container={styles.inputField} imageView = {styles.imageView} image={styles.image} inputView={styles.mainInput} placeholder='Username'
                  source={require('../../assets/res/UserLogo.jpg')} value={userLogin.username} onChange={updateUsername}/>
                <InputField container={styles.inputField} imageView = {styles.imageView} image={styles.image} inputView={styles.mainInput} placeholder='Password'
                 source={require('../../assets/res/PassLogo.png')} value={userLogin.password} onChange={updatePassword}/>
            </View>
        </View>
    </SafeAreaView>
      
       
       
    )
}