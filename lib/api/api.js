
import ENV from '../env';
import Fetch from '../helpers/fetch'
import Logger from '../helpers/logger'

export const API = {



  getData() {
    Logger.log('[RETRIEVE data');
    return this._get(`${ENV.API.GET_DATA}`);
  },



  _get(path, params = {}) {
    const method = 'GET';
    const headers = ENV.API.HEADERS;

    let url = Object.keys(params)
      .map(param => `${param}=${params[param]}&`)
      .join('');
    url = `${path}${url ? '?' + url : ''}`;

    return this._fetch(url, { method, params, headers });
  },

  _fetch(path, { method, headers, params, body }) {
    const now = +new Date();
    return Fetch(path, { method, params, headers, body })
      .then(res => res.json())
      .then(res => {
        Logger.log(`[${method}] end (took:' + (+${new Date() - now}) + 'ms)`);
        return res;
      });
  },
};




