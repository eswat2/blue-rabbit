import axios from 'axios';

function getPosts(){
  return axios.get(`http://localhost:3004/posts`);
}

const api = {
  getPosts
}

export default api;
