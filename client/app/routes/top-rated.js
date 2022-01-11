import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TopRatedRoute extends Route {
  @service store;

  async model() {
    const data = await this.store.findAll('knux');

    return data;
  }
}
