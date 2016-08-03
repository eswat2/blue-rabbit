import { action, useStrict } from 'mobx';
import api from './api';
import store from './store';

useStrict(true);

const setPosts = action('set posts', (data) => {
  console.log('-- posts');
  console.log(data);
  store.posts.value = data;
})

const getPosts = () => {
  console.log('-- getPosts');
  api.getPosts().then((response) => { setPosts(response.data); });
};

const actions = {
  getPosts
}

export default actions;
