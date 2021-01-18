import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class UserCompo extends Component {
    @service router;

    @action
    goToUserDetail() {
        let { user } = this.args;
        this.router.transitionTo('user-detail', user.id);
    }

    get assignSurvey() {
        let { user } = this.args;
        return user.surveys.length;
    }

    get isAdmin() {
        let { user } = this.args;
        return user.id == 1 ? false : true;
    }
}