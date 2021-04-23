import React from 'react';
import { GET_SONG  } from '../queries/fetchSongs';
import { Link } from 'react-router-dom'
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import { useQuery } from '@apollo/client';

const SongDetail = ({match}) => {
  const { loading, data, error } = useQuery(GET_SONG, {
    variables: {id: match.params.id},
  });

  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <Link to='/'>Backe</Link>
        <h3>{data.song.title}</h3>
        <LyricList lyrics={data.song.lyrics} />
        <LyricCreate songId={data.song.id} />
    </div>
  );
};

export default SongDetail;