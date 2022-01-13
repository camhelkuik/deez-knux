import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

//doorkeeper on server
const serverTokenPath = '/oauth/token';
const serverTokenEndpoint = ENV.apiHost ? ENV.apiHost + serverTokenPath : ENV.apiHost;

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint
});