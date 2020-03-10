import axios from 'axios';
import { API_URL } from '../constants/config';

export default function callApi(
  apiUrl=API_URL,
  endpoint,
  data=null,
  method='get'
  ) {
  return axios({
    method,
    url: apiUrl+endpoint,
    data
  })
  .catch((err) => {
    console.log('Error test: '+err);
  });
}