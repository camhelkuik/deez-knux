import Component from '@glimmer/component';
import ENV from 'deez-knux/config/environment';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MapComponent extends Component {
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

  @tracked marker = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [-96.7969879, 32.7766642] }
      }
    ]
  }

  @action mapClicked({ target: map, point }) {
    console.log(map, point);
  }

}
