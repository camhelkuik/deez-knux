import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;
  @attr('string') password_digest;
  @hasMany('knux') favorited;
}
