import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class NavBarComponent extends Component {
    @service store;
    @service router;

    @action 
    onClickLogOut() {
       this.router.transitionTo('/');
       this.store.unloadAll();
    }
}