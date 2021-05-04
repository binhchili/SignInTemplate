import ActionUtil from '../ActionUtil';
import LoginEffect from './LoginEffect';

export default class LoginAction {
    static REQUEST_LOGIN = 'REQUEST_LOGIN';
    static REQUEST_LOGIN_FINISHED = 'REQUEST_LOGIN_FINISHED';
    static REQUEST_LOGIN_FAILED = 'REQUEST_LOGIN_FAILED';

    static REQUEST_TICKETVALIDATE = 'REQUEST_TICKETVALIDATE';
    static REQUEST_TICKETVALIDATE_FINISHED = 'REQUEST_TICKETVALIDATE_FINISHED';
    static REQUEST_TICKETVALIDATE_FAILED = 'REQUEST_TICKETVALIDATE_FAILED';

    static REQUEST_LOGOUT = 'REQUEST_LOGOUT';
    static REQUEST_LOGOUT_FINISHED = 'REQUEST_LOGOUT_FINISHED';
    static REQUEST_LOGOUT_FAILED = 'REQUEST_LOGOUT_FAILED';

    static LoginSSO(username, pass) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, LoginAction.REQUEST_LOGIN, LoginEffect.DoLogin, username, pass)
        }
    }

    static ValidateTicket(ticket) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, LoginAction.REQUEST_TICKETVALIDATE, LoginEffect.SendTicketValidate, ticket)
        }
    }

    static LogoutSSO(ticket) {
        return async (dispatch) => {
            await ActionUtil.createThunkEffect(dispatch, LoginAction.REQUEST_LOGOUT, LoginEffect.LogOut, ticket)
        }
    }
}