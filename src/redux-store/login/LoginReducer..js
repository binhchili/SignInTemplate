
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
            if (action.code == "AUT-000") return { ...state, ticket: action.data.serviceTicket }
            else if (action.code == "AUT-001") return { ...state, error: true, message: action.message }
        case LoginAction.REQUEST_TICKETVALIDATE:
            return { ...state, logging: true }
        case LoginAction.REQUEST_TICKETVALIDATE_FINISHED:
            if (action.code == 'AUT-000') return { ...state, loggedTime: new Date(), ticket: null }
            else if (action.code == 'AUT-005') return { ...state, error: true, message: action.message }
            else if (action.code == null) return { ...state, error: true, message: "Khong co quyen truy cap" }


    }
}
