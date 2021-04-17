import { gql } from '@apollo/client';
import React, { useState } from 'react';
import {graphql} from '@apollo/client/react/hoc';

const LyricCreate = ({mutate, songId}) => {
  const [content, setContent] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({
      variables: {
        content,
        songId
      }
    }).then(() => setContent(''))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a Lyric</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId){
      id
      lyrics{
        id
        content
        likes
      }
    }
  }
`

export default graphql(mutation)(LyricCreate);