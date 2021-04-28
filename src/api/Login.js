import { base } from './base';



export default {
    ssoLogin: (username, password) =>
        base({
            method: 'POST',
            url: `sso/login`,
            data: {
                username, password,
                method: JWT
            }
        }),

    serviceValidate: (ticket, appCode) =>
        base({
            method: 'GET',
            url: `sso/serviceValidate`,
            params: {
                appCode, ticket
            }
        }),

};
