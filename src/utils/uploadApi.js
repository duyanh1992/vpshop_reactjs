import axios from 'axios';

export default function uploadImage(url, method='get', data) {
  return axios({
    method,
    url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
  .catch((err) => {
    console.log(err);
  });
};