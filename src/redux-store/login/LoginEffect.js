import Login from '../../api/Login';
export default class LoginEffect {
    static async DoLogin(username, pass) {
        try {
            const res = await Login.ssoLogin(username, pass);
            return res.data
        }
        catch (error) {
            return error
        }
    }
}