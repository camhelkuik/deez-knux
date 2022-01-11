import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked error;
  @tracked username;
  @tracked password;

  @action
  async login(event) {
    //prevent form submittion and page reload
    event.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:token',
        this.username,
        this.password
      );
    } catch (error) {
      this.error = error;
    }
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}
