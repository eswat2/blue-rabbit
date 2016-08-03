import axios from 'axios';

function getPosts(username){
  return axios.get(`http://localhost:3004/posts`);
}

const api = {
  getPosts
}

export default api;
