
import LoginAction from './LoginAction';
const initialState = {
    ticket: null,
    loggedTime: null,
    error: false,
    message: "",
    dispatch_time: null
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginAction.REQUEST_LOGIN:
            return state;
        case LoginAction.REQUEST_LOGIN_FINISHED:
            if (action.code == "API-000") return { ...state, ticket: action.data.serviceTicket, error: false, dispatch_time: action.time }
            else if (action.code == "AUT-001") return { ...state, error: true, message: action.message, dispatch_time: action.time }
        case LoginAction.REQUEST_TICKETVALIDATE:
            return state;
        case LoginAction.REQUEST_TICKETVALIDATE_FINISHED:
            console.log(action.code);
            if (action.code == 'API-000') return { ...state, loggedTime: action.time, error: false, dispatch_time: action.time }
            else if (action.code == 'AUT-005') return { ...state, error: true, message: action.message, ticket: null, message: "", dispatch_time: action.time }
            else if (action.code == null) return { ...state, error: true, message: "Khong co quyen truy cap", ticket: null, dispatch_time: action.time }
        case LoginAction.REQUEST_LOGOUT_FINISHED:
            if (action.code == 'API-000') return { ...state, loggedTime: null, ticket: null, dispatch_time: action.time }

        case LoginAction.REQUEST_LOGIN_FAILED: case LoginAction.REQUEST_TICKETVALIDATE_FAILED:
            return { ...state, error: true, message: action.message, dispatch_time: action.time }
        default:
            return state
    }
}
