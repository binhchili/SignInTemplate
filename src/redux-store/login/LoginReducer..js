
import LoginAction from './LoginAction';
const initialState = {
    logging: false,
    ticket: null,
    loggedTime: null,
    error: false,
    message: ""
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoginAction.REQUEST_LOGIN:
            return { ...state, logging: true }
        case LoginAction.REQUEST_LOGIN_FINISHED:
            if (action.code == "API-000") return { ...state, ticket: action.data.serviceTicket }
            else if (action.code == "API-001") return { ...state, error: true, message: action.message, logging: false }
        case LoginAction.REQUEST_TICKETVALIDATE:
            return { ...state, logging: true }
        case LoginAction.REQUEST_TICKETVALIDATE_FINISHED:
            if (action.code == 'API-000') return { ...state, loggedTime: new Date(), logging: false }
            else if (action.code == 'API-005') return { ...state, error: true, message: action.message, logging: false }
            else if (action.code == null) return { ...state, error: true, message: "Khong co quyen truy cap", logging: false }
        default:
            return state
    }
}
