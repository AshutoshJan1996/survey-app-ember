import RESTAdapter from '@ember-data/adapter/rest';
import { backendUrl } from '../env';

export default class ApplicationAdapter extends RESTAdapter {
    host = backendUrl;
}

