import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import jquery from 'jquery';
import { backendUrl } from '../env';



export default class SignIn extends Controller {
  @service store;
  @tracked isAutUser = false;
  userName;
  password;

  @action
  onClickLogIn(e) {
    let _self = this
    e.preventDefault();
    let user = this.get('userName');
    let pass = this.get('password');
    let url = `${backendUrl}/login`;
    jquery.post(url, { userName: user, password: pass })
      .then(function (resp) {
        if (resp.message === 'success') {
          const data = { data: resp.data };
          user === 'admin' ?
            _self.transitionToRoute('/admin')
            : _self.transitionToRoute('/user');

          _self.resetForm();
          _self.isAutUser = false;
          _self.store.push(data);
        } else if (resp.message === 'failed') {
          _self.resetForm();
          _self.isAutUser = true;
        }
      })
  }
  resetForm() {
    this.set('userName', '');
    this.set('password', '');
  }
}