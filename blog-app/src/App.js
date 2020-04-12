import React, { useState } from 'react';

import UserBar from './users/UserBar'

import CreatePost from './posts/CreatePost'
import PostList from './posts/PostList'
import defaultPosts from './posts/post-fixtures'

export default function App() {
  const [ user, setUser ] = useState('');
  const [ posts, setPosts ] = useState(defaultPosts);

  return (
    <div style={ { "padding": "25px 150px 0 150px" } }>
      <UserBar user={user} setUser={setUser} />
      { user && <CreatePost user={ user } posts={ posts } setPosts={ setPosts } /> }
      { posts && <PostList posts={ posts } /> }
    </div>
  )
}