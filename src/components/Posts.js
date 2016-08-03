import React from 'react';

import { observer } from 'mobx-react';
import store from '../utils/store';

const POST_STYLE = {
  marginRight: 2,
  marginTop: 2,
  display: 'inline-block',
  padding: 5,
  paddingRight: 6,
  paddingLeft: 6,
  cursor: 'pointer'
}

const Posts = observer(() => {
  // console.log('-- render:  Posts');
  const posts = store.posts.value;
  return (
    <div>
      {posts.map((post,index) => <span className="label label-primary" style={POST_STYLE} key={index}>{post.title}</span>)}
    </div>
  )
})

export default Posts;
