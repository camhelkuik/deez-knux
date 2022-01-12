import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;
  @service router;

  @tracked email;
  @tracked password;
  @tracked error;

  @action
  async login(event) {
    event.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:oauth',
        this.email,
        this.password
      );
      //may not need
      this.router.transitionTo('index');
    } catch (error) {
      this.error = error.error || error;
    }
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}
