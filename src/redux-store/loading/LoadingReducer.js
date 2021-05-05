import LoadingAction from './LoadingAction';

export const LoadingReducer = (state = false, action) => {
    switch (action.type) {
        case LoadingAction.TOOGLE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}