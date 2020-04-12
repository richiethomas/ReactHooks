import React, { useState } from 'react'

export default function CreatePost({ user, posts, setPosts }) {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    const newPost = {
      title,
      author: user,
      content
    }
    setPosts([ ...posts, newPost ])
  }

  function handleTitleChange({ target: { value }}) {
    setTitle(value);
  }
  function handleContentChange({ target: { value }}) {
    setContent(value);
  }

  return (
    <div>
      <hr style={ { "margin": "30px 0" } } />
      <form onSubmit={ handleFormSubmit }>
        <div>Author: <b>{ user }</b></div>
        <div>
          <label htmlFor="create-title">Title:</label>
          <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitleChange} />
        </div>
        <textarea value={content} onChange={handleContentChange} />
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}