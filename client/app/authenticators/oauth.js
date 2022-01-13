// app/authenticators/oauth2.js
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../congig/environment';

const serverTokenPath = '/oauth/token';

export default class OAuth2Authenticator extends OAuth2PasswordGrantAuthenticator {
  serverTokenendpoint = ENV.apihost
    ? ENV.apiHost + serverTokenPath
    : ENV.apiHost;
}
