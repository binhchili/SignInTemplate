import LoadingAction from './loading/LoadingAction';
export default class ActionUtil {
  static async createThunkEffect(dispatch, actionType, effect, ...args) {//tao ra 1 scope thunk de dung chung
    dispatch({ type: LoadingAction.TOOGLE_LOADING, isLoading: true });//bat dau loading
    dispatch(ActionUtil.createAction(actionType)); //khoi tao action truoc khi call api

    const response = await effect(...args);//call api

    if (ActionUtil.checkObjectType(response)) { //dispatch action finished neu tra ve du lieu thanh cong
      dispatch(ActionUtil.createAction(`${actionType}_FINISHED`, response.code, response.paramCode, response.status, response.data, response.message));
    } else dispatch(ActionUtil.createError(`${actionType}_FAILED`, response.code, response.message))

    return response;
  }

  static createAction(type, code = null, param = null, status = null, data = null, message = null, time = new Date()) {//ham tao action la plain js object
    return { type, code, param, status, data, message, time };
  }

  static createError(type, code = null, message = null, time = new Date()) {//neu co message moi hien pop up thong bao
    return { type, code, message, time }
  }

  static checkObjectType(obj) {
    if (typeof obj != "object" || obj == null) return false
    else if (Object.keys(obj).length != 5) return false
    else return true
  }



}
