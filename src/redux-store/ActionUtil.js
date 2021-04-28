export default class ActionUtil {
  static async createThunkEffect(dispatch, actionType, effect, ...args) {
    dispatch(ActionUtility.createAction(actionType)); //loading

    const response = await effect(...args);

    dispatch(
      ActionUtility.createAction(`${actionType}_FINISHED`, response.code, response.paramCode, response.status, response.data),
    );

    return response;
  }

  static createAction(type, code, param = null, status, data = null) {
    return { type, code, param, status, data };
  }
}
