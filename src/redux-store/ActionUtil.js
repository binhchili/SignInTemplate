import ResponseModel from '../model/ResponseModel'
export default class ActionUtil {
  static async createThunkEffect(dispatch, actionType, effect, ...args) {//tao ra 1 scope thunk de dung chung
    dispatch(ActionUtil.createAction(actionType)); //khoi tao action truoc khi call api

    const response = await effect(...args);//call api

    if (response instanceof ResponseModel) { //dispatch action finished neu tra ve du lieu thanh cong
      dispatch(
        ActionUtil.createAction(`${actionType}_FINISHED`, response.code, response.paramCode, response.status, response.data),
      );
    }


    return response;
  }

  static createAction(type, code, param = null, status, data = null) {//ham tao action la plain js object
    return { type, code, param, status, data };
  }
}
