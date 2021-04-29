import LoginAction from '../login/LoginAction';
const initialState = {
    userTicket: null,
    userIdentity: {},
    listGroup: [],
}

export const UserReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case LoginAction.REQUEST_TICKETVALIDATE_FINISHED:
            return { ...state, userTicket: data.serviceTicket, userIdentity: data.identity, listGroup: data.listGroup }
        default:
            return state
    }
}