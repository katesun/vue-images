import qs from 'qs';

const CLIENT_ID = '9d15181b383ce36';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      repsonse_type: 'token'
    };
    // console.log(`${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`);
    // window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    window.location = `https://api.imgur.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`;

  }
};