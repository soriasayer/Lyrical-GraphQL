import React from 'react';
import {graphql} from '@apollo/client/react/hoc';
import { songQuery } from '../queries/fetchSongs';
import { Link } from 'react-router-dom'

const SongDetail = ({data: {song, loading}}) => {
  
  return (
    <div>
      <Link to='/'>Backe</Link>
      <h3>{!loading ? song.title : 'Loading...'}</h3>
    </div>
  );
};

export default graphql(songQuery, {
  options: ({match}) => {return {variables: {id: match.params.id}}}
})(SongDetail);