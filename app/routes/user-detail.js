import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class UserDetailRoute extends Route {
  @service store;
  async model(params) {
      return  await this.store.findRecord('user',params.id);
  }
}