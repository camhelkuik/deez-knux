// app/authenticators/oauth2.js
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

//setup by doorkeeper
const serverTokenPath = '/oauth/token';

//full path
const serverTokenEndpoint = ENV.apiHost
  ? ENV.apiHost + serverTokenPath
  : serverTokenPath;

// export default class OAuth2Authenticator extends OAuth2PasswordGrant {
//     serverTokenEndpoint
// }

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint
})