import React from 'react';
import {graphql} from '@apollo/client/react/hoc';
import { songQuery } from '../queries/fetchSongs';
import { Link } from 'react-router-dom'
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = ({data: {song, loading}}) => {

  return (
    <div>
      <Link to='/'>Backe</Link>
      {!loading 
      ? (<>
          <h3>{song.title}</h3>
          <LyricList lyrics={song.lyrics} />
          <LyricCreate songId={song.id} />
      </>) : <div>Loading...</div>
    }
    </div>
  );
};

export default graphql(songQuery, {
  options: ({match}) => {return {variables: {id: match.params.id}}}
})(SongDetail);