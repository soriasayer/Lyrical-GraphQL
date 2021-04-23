import React from 'react';
import { useMutation } from '@apollo/client';
import {LIKE_LYRIC} from '../queries/fetchSongs'

const LyricList = ({lyrics}) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const handleLike = (id, likes) => {
    likeLyric({
      variables: {id},
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1
        }
      }
    })
  }

  return (
    <ul className='collection'>
      {lyrics && lyrics.map(({id, content, likes}) => (
        <li key={id} className='collection-item'>
          {content}
          <div className='vote-box'>
            <i className='material-icons' onClick={() => handleLike(id, likes)}>thumb_up</i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LyricList