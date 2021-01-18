import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') userName;
  @attr('string') gender;
  @attr('string') password;
  @attr surveys;
}