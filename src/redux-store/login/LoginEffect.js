import Login from '../../api/Login';
import { Enviroment } from '../../constraints/string'
export default class LoginEffect {
    static async DoLogin(username, pass) {
        try {
            const res = await Login.ssoLogin(username, pass);
            console.log(JSON.stringify(res.data));
            return res.data
        }
        catch (error) {
            console.log(JSON.stringify(error));
            return error
        }
    }

    static async SendTicketValidate(ticket) {
        try {

            const res = await Login.serviceValidate(ticket, Enviroment.APP_CODE);
            console.log(JSON.stringify(res.data));
            return res.data
        }
        catch (error) {
            console.log(JSON.stringify(error));
            return error
        }
    }
}
