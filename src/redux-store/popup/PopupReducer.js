import PopupAction from './PopupAction';

const initialState = {
    message: "",
    dispatch_time: null
}
export const PopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case PopupAction.SHOW_POP_UP:
            console.log("Handle");
            return { ...state, message: action.message, dispatch_time: action.dispatch_time }
        default:
            return state;
    }
}