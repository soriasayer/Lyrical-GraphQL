import React from 'react';

const LyricList = ({lyrics}) => {

  const handleLike = (id) => {
    console.log('liked', id)
  }

  return (
    <ul className='collection'>
      {lyrics && lyrics.map(({id, content}) => (
        <li key={id} className='collection-item'>
          {content}
          <i className='material-icons' onClick={() => handleLike(id)}>thumb_up</i>
        </li>
      ))}
    </ul>
  );
};

export default LyricList;