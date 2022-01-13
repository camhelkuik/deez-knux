// import JSONAPIAdapter from '@ember-data/adapter/json-api';
// // eslint-disable-next-line ember/no-mixins
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// import ENV from '../config/environment';
// import { inject as service } from 'ember/service';

// export default class ApplicationAdapter extends JSONAPIAdapter.extend(
//     DataAdapterMixin,
// ) {
//     @service session;

//     host = ENV.apiHost;

//     get headers() {
//         let headers = {};

//         if (this.session.isAuthenticated) {
//             const authHeader = `Bearer ${this.session.data.authenticated.access_token}`;
//             headers['Authorization'] = authHeader;
//         }

//         return headers;
//     }
// }

// app/adapters/application.js
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  @computed('session.{data.authenticated.access_token,isAuthenticated}')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      // OAuth 2
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`;
    }

    return headers;
  }
}