import RESTSerializer from '@ember-data/serializer/rest';



export default class SurveySerializer extends RESTSerializer {

    primaryKey = 'id';
    modelNameFromPayloadKey(payloadKey) {
        if (payloadKey !== 'survey') {
            return super.modelNameFromPayloadKey(payloadKey.replace(payloadKey,'survey'));
        }
    }

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if(Array.isArray(payload)) {
            payload.forEach((item)=> {
                item.titel = item.survey.titel;
                item.questions = item.survey.questions;
                delete item.survey
            });
            payload.data = payload;
            return super.normalizeResponse(...arguments);
        } else {
            payload.titel = payload.survey.titel;
            payload.questions = payload.survey.questions;
            delete payload.survey;
            payload.data = payload;
            return super.normalizeResponse(...arguments);
        }
    }
}