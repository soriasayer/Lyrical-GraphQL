import {ADD_LYRIC} from '../queries/fetchSongs'
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

const LyricCreate = ({songId}) => {
  const [content, setContent] = useState('')
  const [addLyricToSong] = useMutation(ADD_LYRIC);
 
  const handleSubmit = (e) => {
    e.preventDefault()
    addLyricToSong({
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

export default LyricCreate;