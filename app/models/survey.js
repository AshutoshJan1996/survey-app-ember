import Model, { attr } from '@ember-data/model';

export default class SurveyModel extends Model {
  @attr('string') titel;
  @attr questions;
}