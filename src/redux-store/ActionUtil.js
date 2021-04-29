import ResponseModel from '../model/ResponseModel'
export default class ActionUtil {
  static async createThunkEffect(dispatch, actionType, effect, ...args) {//tao ra 1 scope thunk de dung chung
    dispatch(ActionUtil.createAction(actionType)); //khoi tao action truoc khi call api

    const response = await effect(...args);//call api

    if (ActionUtil.checkObjectType(response)) { //dispatch action finished neu tra ve du lieu thanh 

      dispatch(
        ActionUtil.createAction(`${actionType}_FINISHED`, response.code, response.paramCode, response.status, response.data),

      );

    }


    return response;
  }

  static createAction(type, code = null, param = null, status = null, data = null) {//ham tao action la plain js object
    return { type, code, param, status, data };
  }

  static checkObjectType(obj) {
    if (typeof obj != "object" || obj == null) return false
    else if (obj.code == undefined) return false
    else return true
  }
}
