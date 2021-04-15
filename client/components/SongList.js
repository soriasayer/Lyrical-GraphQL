import React from 'react';
import { gql } from '@apollo/client';
import {graphql} from '@apollo/client/react/hoc';
const SongList = ({data}) => {
  return (
    <div>
      {data.songs ? data.songs.map(song => {
        return (
          <ul className='collection'>
            <li key={song.id} className='collection-item'>
              {song.title}
            </li>
          </ul>
        )
      }) : (
      <div>
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