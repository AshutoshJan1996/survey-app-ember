import RESTSerializer from '@ember-data/serializer/rest';


export default class UserSerializer extends RESTSerializer {

    primaryKey = 'id';
    modelNameFromPayloadKey(payloadKey) {
        if (payloadKey !== 'user') {
            return super.modelNameFromPayloadKey(payloadKey.replace(payloadKey,'user'));
        }
    }
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if(Array.isArray(payload)) {
            payload.forEach((item)=> {
                item.firstName = item.user.firstName;
                item.gender = item.user.gender;
                item.lastName = item.user.lastName;
                item.password = item.user.password;
                item.surveys = item.user.surveys;
                item.userName = item.user.userName;
                delete item.user
            });
            payload.data = payload;
            return super.normalizeResponse(...arguments);
        } else {
            payload.firstName = payload.user.firstName;
            payload.gender = payload.user.gender;
            payload.lastName = payload.user.lastName;
            payload.password = payload.user.password;
            payload.surveys = payload.user.surveys;
            payload.userName = payload.user.userName;
            delete payload.user
            payload.data = payload;
            return super.normalizeResponse(...arguments);
        }
    }
}