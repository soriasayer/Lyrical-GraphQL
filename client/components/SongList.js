import React from 'react';
import { gql } from '@apollo/client';
import {graphql} from '@apollo/client/react/hoc';
import {Link} from 'react-router-dom'

const SongList = ({data}) => {

  return (
    <div>
      {data.songs 
        ? (<>
            <ul className='collection'>
            {data.songs.map(song => (
                <li key={song.id} className='collection-item'>
                  {song.title}
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

const query = gql`
  {
    songs{
      id
      title
    }
  }
`

export default graphql(query)(SongList);