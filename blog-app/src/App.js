import React from 'react';

import UserBar from './users/UserBar'

import CreatePost from './posts/CreatePost'
import PostList from './posts/PostList'
import posts from './posts/post-fixtures'

export default function App() {
  return (
    <div style={ { "padding": "25px 150px 0 150px" } }>
      <UserBar />
      <hr style={ { "margin": "30px 0" } } />
      <CreatePost user="Captain Hook" />
      <hr style={ { "margin": "30px 0" } } />
      <PostList posts={ posts } />
    </div>
  )
}