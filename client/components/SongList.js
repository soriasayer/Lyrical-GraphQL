import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {Link} from 'react-router-dom'
import {GET_SONGS, DELETE_SONG} from '../queries/fetchSongs'

const SongList = () => {
  const { loading, data} = useQuery(GET_SONGS);
  
  const [deleteSong] = useMutation(DELETE_SONG, {
    update(cache, {data: {deleteSong}}){
      const {songs} = cache.readQuery({query: GET_SONGS})
      cache.writeQuery({
        query: GET_SONGS,
        data: {songs: songs.concat([deleteSong])}
      })
    }
  });

  const onDeletSong = (id) => {
  deleteSong({
      variables: {id}
    })
  }

  return (
    <div>
      {!loading 
        ? (<>
            <ul className='collection'>
            {data.songs.map(({id, title}) => (
                <li key={id} className='collection-item'>
                  <Link to={`/song/${id}`}>
                    {title}
                  </Link>
                  <i className='material-icons' onClick={() => onDeletSong(id)}>
                    delete
                  </i>
                </li>))
              } 
            </ul>
            <Link to='/songs/new' className='btn-floating btn-large red right'>
              <i className='material-icons'>add</i>
            </Link>
          </>)
        : (<div>
          Loading...
        </div>)}
    </div>
  );
};

export default SongList