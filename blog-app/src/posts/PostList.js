import React from 'react'

import Post from './Post'

export default function PostList({ posts }) {
  return (
    <>
    { posts.map(( post, idx ) => (
        <React.Fragment key={`post-${ idx }`}  >
          <Post { ...post } />
          <hr style={ { "margin": "30px 0" } } />
        </React.Fragment>
      )) }
    </>
  )
}