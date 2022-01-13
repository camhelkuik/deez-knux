import Model, { attr, hasMany } from '@ember-data/model';

export default class KnuxModel extends Model {
  @attr('string') knux;
  // @hasMany('user', { inverse: null }) upvoted;
  @hasMany('user') favorited;
}
