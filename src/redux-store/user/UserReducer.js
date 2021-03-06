import LoginAction from '../login/LoginAction';
import UserAction from '../user/UserAction';
const initialState = {
    userTicket: null,
    userIdentity: {},
    listGroup: [],
}

export const UserReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case LoginAction.REQUEST_TICKETVALIDATE_FINISHED:
            if (action.code == 'API-000') return { ...state, userTicket: data.serviceTicket, userIdentity: data.identity, listGroup: data.listGroup }
        case LoginAction.REQUEST_LOGOUT_FINISHED:
            if (action.code == 'API-000') return { userTicket: null, userIdentity: {}, listGroup: [] }
        case UserAction.DELETE_USER:
            return initialState;
        default:
            return state
    }
}