import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import { styles } from './style';
import { InputField } from '../../components/InputField';
import Login from '../../api/Login';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function LoginScreen() {

    const navigation = useNavigation();
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    });

    const updateUsername = (username) => setUserLogin(prev => ({ ...prev, username }));
    const updatePassword = (password) => setUserLogin(prev => ({ ...prev, password }));

    const LoginPress = () => {
        Login.userLogin(userLogin.username, userLogin.password).then(res => {
            console.log(res.data);
            navigation.navigate('MainApp', { screen: 'HomeScreen', params: { userToken: res.data.access_token } });
        })
            .catch(e => console.log(e))
    }
    return (
        <SafeAreaView>
            <View style={styles.mainScreen}>
                <View style={styles.logoScreen}>

                </View>
                <View style={styles.inputContainer}>
                    <InputField container={styles.inputField} imageView={styles.imageView} image={styles.image} inputView={styles.mainInput} placeholder='Username'
                        source={require('../../assets/res/UserLogo.jpg')} value={userLogin.username} onChange={updateUsername} />
                    <InputField container={styles.inputField} imageView={styles.imageView} image={styles.image} inputView={styles.mainInput} placeholder='Password'
                        source={require('../../assets/res/PassLogo.png')} value={userLogin.password} onChange={updatePassword} />
                    <TouchableOpacity style={styles.logButton} onPress={LoginPress}>
                        <Text style={{ fontSize: 14 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>



    )
}