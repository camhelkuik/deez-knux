import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { words } from '../data/words';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service store;

  @tracked knuxArray = ['d', 'e', 'e', 'z', 'k', 'n', 'u', 'x'];

  @tracked isCaps = false;
  @tracked knuxFontColor = '#52B497';
  @tracked knuxFont = '#default';
  @tracked knuxColor = '#E74244';

  @action toggleCaps() {
    this.isCaps = !this.isCaps;
    var newKnuxArray = [];
    if (this.isCaps === true) {
      this.knuxArray.forEach((knux) => {
        newKnuxArray.push(knux.toUpperCase());

        this.knuxArray = newKnuxArray;
      });
    } else {
      this.knuxArray.forEach((knux) => {
        newKnuxArray.push(knux.toLowerCase());

        this.knuxArray = newKnuxArray;
      });
    }
  }

  @action knuxColorChanged(color) {
    this.knuxColor = color;
  }

  @action fontColorChanged(color) {
    this.knuxFontColor = color;
  }

  @action changeFont(font) {
    this.knuxFont = font;
  }

  @action
  generateKnux() {
    let i = 0;
    let combinedKnux = [];

    while (i < 2) {
      const wordKnux = words;
      const random = Math.floor(Math.random() * wordKnux.length);

      let breakWord = wordKnux[random].split('');
      combinedKnux.push(breakWord);
      i++;
    }

    let rightKnux = combinedKnux[0];
    let leftKnux = combinedKnux[1];

    this.knuxArray = rightKnux.concat(leftKnux);

    let firstKnux = this.knuxArray.splice(0, 4).join(''); //this edits the initial array so it now only has the last half
    let secondKnux = this.knuxArray.splice(0, 4).join(''); //thus why this uses the same 0,4
    let cominedTopRated = firstKnux + ' ' + secondKnux;

    this.store.createRecord('knux', {
      knux: cominedTopRated
    });
  }

  @action
  addToTopRated() {
    this.store.peekRecord('knux', 1).save();
  }
}
