import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import {GET_SONGS, ADD_SONG} from '../queries/fetchSongs'

const CreateSong = () => {
  const history = useHistory();
  const [title, setTitle] = useState('')
  const [addSong] = useMutation(ADD_SONG)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addSong({
      variables: {title},
      refetchQueries: [{query: GET_SONGS}]
    }).then(() => history.push('/'))
  }

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>Create a new Song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateSong;