import Login from '../../api/Login';
import { Enviroment } from '../../constraints/string';
import { TransformError } from '../TransformErrorResponse';
export default class LoginEffect {
    static async DoLogin(username, pass) {
        try {
            const res = await Login.ssoLogin(username, pass);
            console.log(JSON.stringify(res.data));
            return res.data
        }
        catch (error) {
            return TransformError(error);
        }
    }

    static async SendTicketValidate(ticket) {
        try {
            const res = await Login.serviceValidate(ticket, Enviroment.APP_CODE);
            console.log(JSON.stringify(res.data));
            return res.data
        }
        catch (error) {
            return TransformError(error);
        }
    }

    static async LogOut(ticket) {
        try {
            const res = await Login.logout(ticket);
            console.log(JSON.stringify(res.data));
            return res.data
        }
        catch (error) {
            return TransformError(error);
        }
    }
}
