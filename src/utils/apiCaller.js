import axios from 'axios';

export default function callApi(apiUrl, endpoint, data=null, method='get') {
  return axios({
    method,
    url: apiUrl+endpoint,
    data
  })
  .catch((err) => {
    console.log('Error test: '+err);
  });
}