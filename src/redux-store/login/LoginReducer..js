
import LoginAction from './LoginAction';
const initialState = {
    ticket: null,
    loggedTime: null,
    error: false,
    message: "",
    actionTime: null
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginAction.REQUEST_LOGIN:
            return state;
        case LoginAction.REQUEST_LOGIN_FINISHED:
            if (action.code == "API-000") return { ...state, ticket: action.data.serviceTicket, error: false, }
            else if (action.code == "AUT-001") return { ...state, error: true, message: action.message, logging: false, actionTime: action.actionTime }
        case LoginAction.REQUEST_TICKETVALIDATE:
            return state;
        case LoginAction.REQUEST_TICKETVALIDATE_FINISHED:
            if (action.code == 'API-000') return { ...state, loggedTime: action.actionTime, logging: false, error: false }
            else if (action.code == 'AUT-005') return { ...state, error: true, message: action.message, logging: false, actionTime: action.actionTime, ticket: null, message: "" }
            else if (action.code == null) return { ...state, error: true, message: "Khong co quyen truy cap", logging: false, actionTime: action.actionTime, ticket: null }
        case LoginAction.REQUEST_LOGOUT_FINISHED:
            if (action.code == 'API-000') return { ...state, loggedTime: null, ticket: null, actionTime: action.actionTime }

        case LoginAction.REQUEST_LOGIN_FAILED: case LoginAction.REQUEST_TICKETVALIDATE_FAILED:
            return { ...state, error: true, actionTime: action.actionTime, message: action.message, logging: false }
        default:
            return state
    }
}
