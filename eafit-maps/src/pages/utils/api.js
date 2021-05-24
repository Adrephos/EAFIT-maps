import axios from 'axios';

export function getPost(id) {
  return axios({
    method: 'get',
    url: '',
    params: { id },
  })
}