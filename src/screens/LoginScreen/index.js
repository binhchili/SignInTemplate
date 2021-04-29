import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView, Text, Image } from 'react-native';
import { styles } from './style';
import { InputField } from '../../components/InputField';
import Login from '../../api/Login';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginAction from '../../redux-store/login/LoginAction';

const LoginScreen = (props) => {

    const { logging, ticket, logTime, isError, msg } = props; // state cua phan login
    const { login, validate } = props;//dispatch action phan login
    const navigation = useNavigation();
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    });

    const updateUsername = (username) => setUserLogin(prev => ({ ...prev, username }));
    const updatePassword = (password) => setUserLogin(prev => ({ ...prev, password }));

    const LoginPress = () => {
        login(userLogin.username, userLogin.password);
    }

    useEffect(() => {
        console.log("Logging: " + logging);
    }, [logging])

    useEffect(() => {
        if (isError) console.log("error happened: " + msg);
    }, [isError])

    useEffect(() => {
        if (ticket !== null && ticket != undefined) validate(ticket)
    }, [ticket])

    useEffect(() => {
        if (logTime != null && logTime != undefined) navigation.navigate('MainApp');
    }, [logTime])


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

const mapStateToProps = state => ({
    logging: state.LoginReducer.logging,
    ticket: state.LoginReducer.ticket,
    logTime: state.LoginReducer.loggedTime,
    isError: state.LoginReducer.error,
    msg: state.LoginReducer.message
})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(LoginAction.LoginSSO(username, password)),
    validate: tick => dispatch(LoginAction.ValidateTicket(tick))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)