import { gql } from '@apollo/client';

export const songsQuery = gql`
  {
    songs{
      id
      title
    }
  }
`

export const songQuery = gql`
  query SongQuery($id: ID!){
    song(id: $id){
      id
      title
    }
  }
`