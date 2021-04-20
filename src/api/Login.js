import { base } from './base';
import { REALM, CLIENT_ID, CLIENT_SECRET } from '../constraints/string';
import { userPass, userTest } from '../constraints/testacc';

const qs = require('qs');
export default {
    userLogin: (username, password) =>
        base({
            method: 'POST',

            url: `auth/realms/${REALM}/protocol/openid-connect/token`,
            data: qs.stringify({
                username,
                password,
                grant_type: 'password',
                client_secret: CLIENT_SECRET,
                client_id: CLIENT_ID,
            }),
        }),

    userInfo: token =>
        base({
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
            },
            url: `auth/realms/${REALM}/protocol/openid-connect/userinfo`,
        }),

    userLogout: (token, resetToken) =>
        base({
            method: 'POST',
            url: `auth/realms/${REALM}/protocol/openid-connect/logout`,
            headers: {
                authorization: `Bearer ${token}`,
            },
            data: qs.stringify({
                refresh_token: resetToken,
                client_secret: CLIENT_SECRET,
                client_id: CLIENT_ID,
            })
        })

};
