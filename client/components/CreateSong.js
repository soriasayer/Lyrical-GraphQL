import React, {useState} from 'react';
import { gql } from '@apollo/client';
import {graphql} from '@apollo/client/react/hoc';
import { Link, useHistory } from 'react-router-dom';
import query from '../queries/fetchSongs'

const CreateSong = (props) => {
  const history = useHistory();
  const [title, setTitle] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.mutate({
      variables: {title},
      refetchQueries: [{query}]
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

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title){
      title
    }
  }
`

export default graphql(mutation)(CreateSong);