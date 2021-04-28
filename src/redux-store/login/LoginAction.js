import ActionUtil from '../ActionUtil';
import LoginEffect from './LoginEffect';
import Login from '../../api/Login';

export default class LoginAction {
    static REQUEST_LOGIN = 'REQUEST_LOGIN';
    static REQUEST_LOGIN_FINISHED = 'REQUEST_LOGIN_FINISHED';

    static LoginSSO(username, pass) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, LoginAction.REQUEST_LOGIN, LoginEffect.DoLogin, username, pass)
        }
    }
}