import React, {useState} from 'react';

const CreateSong = () => {
  const [title, setTitle] = useState('')
  console.log(title)
  return (
    <div>
      <h3>Create a new Song</h3>
      <form>
        <label>Song Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateSong;