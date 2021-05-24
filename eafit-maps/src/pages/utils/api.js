import axios from 'axios';

export function getPost(id) {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/map',
    params: { id },
  })
}