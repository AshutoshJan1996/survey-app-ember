import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class SignUp extends Controller {
    @service store;
    @tracked isUserName = false;
    @tracked isPassword = false;
    firstName = '';
    lastName = '';
    userName = '';
    gender;
    password = '';

    @action
    selectGender(gender) {
        this.gender = gender;
    }

    @action
    onClickSubmite(e) {
        e.preventDefault();
        if (!this.checkVal()) {
            return;
        }

        let _self = this
        let newRecord = this.store.createRecord('user', {
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            gender: this.gender,
            password: this.password,
            surveys: []
        })
        newRecord.save().then(function (user) {
            _self.transitionToRoute('/');
        }).catch(function (err) {
            _self.resetForm();
            console.error(err);
        });
    }

    checkVal() {
        let flag = true;
        let user = this.get('userName');
        let pass = this.get('password');
        if (user.length === 0) {
            this.isUserName = true;
            flag = false;
        }
        if (pass.length === 0) {
            this.isPassword = true;
            flag = false;
        }
        return flag;
    }

    @action
    validate(field) {
        if (field === 'uName') {
            this.isUserName = false;
        }
        if (field === 'pass') {
            this.isPassword = false;
        }
    }

    resetForm() {
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('userName', '');
        this.set('gender', '');
        this.set('password', '');
    }
}