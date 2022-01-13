import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;

  @tracked error;
  @tracked email;
  @tracked password;

  @action
  async login(event) {
    event.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:oauth',
        this.email,
        this.password
      );
    } catch (e) {
      this.error = e.error || e;
    }
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
}
