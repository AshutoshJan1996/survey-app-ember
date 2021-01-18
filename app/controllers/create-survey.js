import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CreateSurevey extends Controller {

  titel = '';
  question = '';
  selectedType = 'checkBox';
  opation = '';
  @tracked opationList = [];
  @tracked questionList = [];

  @action
  setSelection(selected) {
    this.set('selectedType', selected);
  }

  @action
  onAddOpation() {
    let tempOpationList = this.get('opationList');
    let tempOpation = this.get('opation')
    if (tempOpation.length === 0) {
      return;
    }
    tempOpationList.push(tempOpation);
    this.set('opationList', tempOpationList);
    this.set('opation', '');
  }

  @action
  removeOpation(index) {
    let tempOpationList = this.get('opationList');
    tempOpationList.splice(index, 1);
    this.set('opationList', tempOpationList);
  }

  @action
  onAddQuestion() {
    let tempQues = this.get('question');
    let tempType = this.get('selectedType');
    let tempOpationList = this.get('opationList');
    if (tempOpationList.length === 0 || tempQues.length === 0) {
      return;
    }
    let quesObj = {
      question: tempQues,
      type: tempType,
      opations: tempOpationList
    }

    let tempquestionList = this.get('questionList');
    tempquestionList.push(quesObj);
    this.set('questionList', tempquestionList);
    this.set('question', '');
    this.set('opationList', []);
  }

  @action
  removeQuestion(index) {
    let tempQuestionList = this.get('questionList');
    tempQuestionList.splice(index, 1);
    this.set('questionList', tempQuestionList);
  }

  @action
  submitSurvey(e) {
    e.preventDefault();
    let titel = this.get('titel');
    let questions = this.get('questionList');
    if (questions.length === 0 || titel.length === 0) {
      return;
    }

    let _self = this
    let newSurvey = this.store.createRecord('survey', {
      titel: titel,
      questions: questions
    })

    newSurvey.save().then(function (resp) {
      _self.transitionToRoute('/survey-list');
    }).catch(function (err) {
      _self.resetSurvey();
      console.error(err);
    });
  }

  @action
  resetSurvey() {
    this.set('titel', '');
    this.set('question', '');
    this.set('opation', '');
    this.set('opationList', []);
    this.set('questionList', []);
  }

}