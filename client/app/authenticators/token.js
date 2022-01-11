import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
      let { token } = data;
      if(token){
          return data;
      } else {
          throw 'no valid session data';
      }
  },

  async authenticate(username, password) {
    let response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      return response.json();
    } else {
      let error = await response.text();
      throw new Error(error);
    }
  },

  invalidate(data) {
      //no-op
  },
});
