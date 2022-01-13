import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service session;
  @service store;

  @tracked error;
  @tracked email;
  @tracked password;

  @action
  async signup(event) {
    event.preventDefault();
    let user = this.store.createRecord('user', { email: this.email, password: this.password});
    await user.save();

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
