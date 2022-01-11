import Controller from '@ember/controller';

export default class TopRatedController extends Controller {
  get rank() {
    //have to compare it to others....
  }

  get knux() {
    return this.model.knux;
  }

  get votes() {
    return this.model.upvoted.length;
  }
}
