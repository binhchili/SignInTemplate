import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { styles } from './style';
import { InputField } from '../../components/InputField';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginAction from '../../redux-store/login/LoginAction';
import LoadingAction from '../../redux-store/loading/LoadingAction';
import PopupAction from '../../redux-store/popup/PopupAction';
import UserAction from '../../redux-store/user/UserAction';

const LoginScreen = (props) => {
    const { route } = props;//params truyen qua navigation

    const { ticket, logTime, isError, msg, dispatch_time } = props; // state cua phan login
    /*
        ticket: ticket cua user, se duoc luu trong local storage
        logTime: thoi gian dang nhap, khi validate thanh cong se tra ve logTime va navigate vao main app
        isError: call api thuc hien co bi loi hay khong (loi cua server)
        msg: message tra ve khi call
        dispatch_time: thoi gian dispatch action (cai nay chi de check cho useEffect tu update lai screen)
    */
    const { login, validate, loadingComplete, showPopup, deleteUser } = props;//dispatch action phan login
    /*
        login: dispatch action call api login,
        validate: dispatch action call api validate,
        loadingComplete: dispatcha action ket thuc phan loaing (action bat dau loading duoc dispatch trong ActionUtil.createThunkEffect),
        showPopup: dispatch action hien thi popup thong bao ben duoi
        deleteUser: xoa toan bo thong tin user dang luu tru trong store (chi dung sau khi logOut thanh cong va quay ve trang login)
    */
    const navigation = useNavigation();
    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    });

    const updateUsername = (username) => setUserLogin(prev => ({ ...prev, username }));
    const updatePassword = (password) => setUserLogin(prev => ({ ...prev, password }));



    const LoginPress = () => {
        login(userLogin.username, userLogin.password);//call action login
    }
    useEffect(() => {
        if (isError) {
            updateUsername(""); updatePassword("");
            //khi tra ve msg moi, neu msg nay thong bao co loi se thuc hien 2 ham duoi day
            loadingComplete();//ket thuc loading
            showPopup(msg);//hien thi thong bao loi
        }
    }, [dispatch_time])

    useEffect(() => {
        //khi co ticket moi thi validate ticket do
        if (ticket !== null && ticket != undefined) validate(ticket)
    }, [ticket])

    useEffect(() => {
        //login thanh cong khi da validate ticket xong (validate success se update logTime trong redux store)
        if (logTime != null && logTime != undefined) {
            updateUsername(""); updatePassword("");
            loadingComplete();//login thanh cong se ket thuc viec loading
            navigation.navigate('MainApp');
        }
    }, [logTime])

    useEffect(() => {
        if (route.params.previousAction == 'logout') deleteUser();
    }, [route.params.previousAction])

    return (
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
    )
}

//map state va cac ham dispatch tu redux store xuong component con

const mapStateToProps = state => ({
    ticket: state.loginInfo.ticket,
    logTime: state.loginInfo.loggedTime,
    isError: state.loginInfo.error,
    msg: state.loginInfo.message,
    dispatch_time: state.loginInfo.dispatch_time,
    popup: state.popup,
})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(LoginAction.LoginSSO(username, password)),
    validate: tick => dispatch(LoginAction.ValidateTicket(tick)),
    loadingComplete: () => dispatch({ type: LoadingAction.TOOGLE_LOADING, isLoading: false }),
    showPopup: message => dispatch({ type: PopupAction.SHOW_POP_UP, message, dispatch_time: new Date() }),
    deleteUser: () => dispatch({ type: UserAction.DELETE_USER })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)