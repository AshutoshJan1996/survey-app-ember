import Component from '@glimmer/component';


export default class SurveyCompo extends Component {
    get numberOfQuestion() {
        let { survey } = this.args;
        return survey.questions.length;
    }
}