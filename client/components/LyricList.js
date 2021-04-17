import { gql } from '@apollo/client';
import React from 'react';
import {graphql} from '@apollo/client/react/hoc';

const LyricList = ({lyrics, mutate}) => {

  const handleLike = (id, likes) => {

    mutate({
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

const mutation = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id: $id){
      id
      likes
    }
  }
`

export default graphql(mutation)(LyricList);