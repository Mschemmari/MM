// @flow

const env = process.env.NODE_ENV || "development";

// const DEVELOPMENT = "http://localhost:3001";
// const BASE_URL = PRODUCTION; // env === "production" ? PRODUCTION : DEVELOPMENT;
const BASE_URL = 'http://jsonplaceholder.typicode.com'


const ENV = {
  BASE_URL,
  API: {
    HEADERS: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    GET_DATA: `${BASE_URL}/photos?_start=0&_limit=5`,

  }
};

export default ENV