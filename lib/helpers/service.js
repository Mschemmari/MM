// @flow

import Logger from './logger';

export const Headers = {
  JSON: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
};

const Service = async ({ name = 'nn', url = '', method = 'GET', headers = Headers.JSON, body }) => {

  let req;
  let res;
  const now = +new Date();
  let IS_OFFLINE = undefined;
  try { IS_OFFLINE = process.env.IS_OFFLINE || process.env.NODE_ENV === 'development'; } catch(e) {}

  Logger.log(`[${name}] fetch @${(new Date(now)).toISOString()}`);

  if (body && headers['content-type'] === Headers.JSON['content-type'])
    body = JSON.stringify(body);

  Logger.log(`[${name}] ${method} ${url}`);
  if (body)
    Logger.log(`[${name}] body ${body && IS_OFFLINE? body.substr(0,28)+'...':''}`, IS_OFFLINE ? '' : body);

  try { req = await fetch(url, {method, headers, body}); }
  catch(error) {
    Logger.warn(`[${name}] error ${error}`);
    return { status: 0, error: 'fetch error', message: error.message };
  }

  try {
    res = await req.text();
    res = JSON.parse(res);
  }
  catch (error) {
    Logger.warn(`[${name}] error ${error}`);
  }

  Logger.log(`[${name}] res ${res && IS_OFFLINE ? JSON.stringify(res).substr(0,28)+'...':''}`, IS_OFFLINE ? '' : JSON.stringify(res));

  if (req.status >= 300 && !res.status)
    res = { status: req.status, error: req.statusText, message: res };

  Logger.log(`[${name}] end (in ${((+new Date())-now)}ms)`);
  return res;
};

export default Service;