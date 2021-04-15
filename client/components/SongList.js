import React from 'react';
import {graphql} from '@apollo/client/react/hoc';
import {Link} from 'react-router-dom'
import query from '../queries/fetchSongs'
import { gql } from '@apollo/client';

const SongList = ({data, mutate}) => {

  const onDeletSong = (id) => {
    mutate({
      variables: {id},
    }).then(() => data.refetch())
  }

  return (
    <div>
      {data.songs 
        ? (<>
            <ul className='collection'>
            {data.songs.map(({id, title}) => (
                <li key={id} className='collection-item'>
                  {title}
                  <i className='material-icons' onClick={() => onDeletSong(id)}>
                    delete
                  </i>
                </li>))
              } 
            </ul>
            <Link to='/song/new' className='btn-floating btn-large red right'>
              <i className='material-icons'>add</i>
            </Link>
          </>)
        : (<div>
          Loading...
        </div>)}
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`

export default graphql(mutation)(
  graphql(query)(SongList)
  );