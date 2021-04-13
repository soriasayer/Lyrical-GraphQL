import React from 'react';
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const SongList = ({data}) => {
  return (
    <div>
      {data.songs ? data.songs.map(song => {
        return (
          <li key={song.id}>
            {song.title}
          </li>
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